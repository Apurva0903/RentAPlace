import React from "react";
import {
  Row,
  Col,
  Button,
  Pagination,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import Property from "../components/Property";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useQuery } from "react-query";
import Loading from "../components/Loading";
import { CATEGORY } from "./AddProperty";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const Home = () => {
  const query = new URLSearchParams(window.location.search);
  const { data, isLoading, refetch } = useQuery(`properties?${query.toString()}`);
  const navigate = useNavigate();

  const filterSchema = z.object({
    category: z.string().nullable(),
    minPrice: z.string().nullable(),
    maxPrice: z.string().nullable(),
    numberOfRoom: z.string().nullable(),
  });

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(filterSchema),
  });

  const onSubmit = (formData) => {
    // Clear existing params first
    const newQuery = new URLSearchParams();

    // Preserve sort if exists
    if (query.get("sort")) newQuery.set("sort", query.get("sort"));

    Object.keys(formData).forEach(key => {
      if (!formData[key]) return;

      if (key === 'facilities' && Array.isArray(formData[key])) {
        // Append each facility as a separate param
        formData[key].forEach(f => newQuery.append("facilities", f));
      } else {
        newQuery.set(key, formData[key]);
      }
    });
    navigate(`/?${newQuery.toString()}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const val = e.target.search.value;
    val ? query.set("search", val) : query.delete("search");
    navigate(`/?${query.toString()}`);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div
        className="hero-section text-center d-flex flex-column justify-content-center align-items-center text-white mb-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          borderRadius: '0 0 50px 50px',
          marginBottom: '40px'
        }}
      >
        <h1 className="display-4 fw-bold mb-3">Find Your Dream Home</h1>
        <p className="lead mb-4 fs-5">Search form properties, apartments in your area.</p>

        <div className="bg-white p-2 rounded-pill shadow-lg d-flex align-items-center w-50" style={{ maxWidth: '800px' }}>
          <form className="d-flex flex-grow-1" onSubmit={handleSearch}>
            <input
              type="search"
              name="search"
              className="form-control border-0 bg-transparent shadow-none ps-4"
              placeholder="Search by city, location or project..."
              style={{ height: '50px' }}
            />
            <Button type="submit" variant="primary" className="rounded-pill px-5 fw-bold ms-2">Search</Button>
          </form>
        </div>
      </div>

      <div className="container pb-5">
        <Row>
          {/* Filters Sidebar */}
          <Col md={3}>
            <div className="card border-0 shadow-sm p-3 mb-4 sticky-top" style={{ top: '100px' }}>
              <h5 className="fw-bold mb-3">Filters</h5>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <label className="small text-muted mb-1">Property Type</label>
                  <Form.Select {...register("category")} className="form-select-sm">
                    <option value="">All Types</option>
                    {CATEGORY.map((c, i) => <option key={i} value={c}>{c}</option>)}
                  </Form.Select>
                </Form.Group>

                <Row className="g-2 mb-3">
                  <Col>
                    <label className="small text-muted mb-1">Min Price</label>
                    <Form.Control type="number" placeholder="Min" {...register("minPrice")} size="sm" />
                  </Col>
                  <Col>
                    <label className="small text-muted mb-1">Max Price</label>
                    <Form.Control type="number" placeholder="Max" {...register("maxPrice")} size="sm" />
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <label className="small text-muted mb-1">Bedrooms</label>
                  <Form.Control type="number" placeholder="Any" {...register("numberOfRoom")} size="sm" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <label className="small text-muted mb-2">Amenities</label>
                  <div className="d-flex flex-wrap gap-2">
                    {['Parking', 'Gym', 'Pool', 'Garden', 'Security'].map((fac) => (
                      <div key={fac} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={fac}
                          id={`check-${fac}`}
                          {...register("facilities")}
                        />
                        <label className="form-check-label small" htmlFor={`check-${fac}`}>
                          {fac}
                        </label>
                      </div>
                    ))}
                  </div>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="sm">Apply Filters</Button>
                  <Button variant="link" size="sm" className="text-decoration-none text-muted" onClick={() => navigate('/')}>Clear All</Button>
                </div>
              </Form>
            </div>
          </Col>

          {/* Listings */}
          <Col md={9}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3>Featured Properties</h3>
              <div>
                <Form.Select
                  size="sm"
                  className="border-0 bg-light fw-bold"
                  onChange={(e) => {
                    query.set("sort", e.target.value);
                    navigate(`/?${query.toString()}`);
                  }}
                >
                  <option value="price,asc">Sort by: Price (Low to High)</option>
                  <option value="price,desc">Sort by: Price (High to Low)</option>
                </Form.Select>
              </div>
            </div>

            {isLoading && <Loading />}

            <Row className="g-4">
              {data?.data?.map((property, index) => (
                <Col key={property.id} lg={4} md={6}>
                  <Property {...property} refetch={refetch} />
                </Col>
              ))}
              {data?.data?.length === 0 && !isLoading && (
                <Col xs={12} className="text-center py-5 text-muted">
                  <h5>No properties found matching your search.</h5>
                  <p>Try adjusting your filters.</p>
                </Col>
              )}
            </Row>

            <div className="mt-5">
              <Pagination className="justify-content-center" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
