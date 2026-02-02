import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiHome } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white border-top py-5 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <Link to="/" className="d-flex align-items-center text-dark text-decoration-none mb-3">
              <FiHome size={24} className="me-2 text-primary" />
              <span className="fs-4 fw-bold text-primary">RentAPlace</span>
            </Link>
            <p className="text-muted small">
              Your premium destination for renting and buying properties.
              We make finding your dream home simple, secure, and seamless.
            </p>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="text-muted text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-muted text-decoration-none">Contact</Link></li>
            </ul>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/privacy-policy" className="text-muted text-decoration-none">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="/terms" className="text-muted text-decoration-none">Terms of Service</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="fw-bold mb-3">Connect With Us</h6>
            <div className="d-flex gap-3">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted"><FiTwitter size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted"><FiInstagram size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-muted"><FiFacebook size={20} /></a>
            </div>
          </Col>
        </Row>

        <div className="border-top mt-4 pt-4 text-center text-muted small">
          © {new Date().getFullYear()} RentAPlace. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
