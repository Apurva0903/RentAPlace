import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center border-0 shadow-sm p-5 rounded bg-white">
        <Col md={10}>
          <h1 className="fw-bold mb-4 text-primary">About RentAPlace</h1>
          <p className="lead text-muted mb-4">
            Welcome to <strong>RentAPlace</strong>, your trusted partner in finding the perfect home.
            We are dedicated to simplifying the rental and buying process, offering a curated selection of
            premium properties across India's most vibrant cities.
          </p>
          <h3 className="fw-bold mt-5 mb-3">Our Mission</h3>
          <p className="mb-4">
            Our mission is to bridge the gap between dream homes and future residents through technology,
            transparency, and trust. Whether you are looking for a cozy apartment in Mumbai or a spacious
            villa in Bangalore, we ensure a seamless experience from browsing to booking.
          </p>
          <h3 className="fw-bold mt-5 mb-3">Why Choose Us?</h3>
          <ul className="list-unstyled">
            <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Verified Listings</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Secure Token Payments</li>
            <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>24/7 Dedicated Support</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default About;