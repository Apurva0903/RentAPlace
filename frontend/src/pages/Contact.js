import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} className="bg-white shadow-sm p-5 rounded border-0">
          <h1 className="fw-bold text-center mb-5 text-primary">Get in Touch</h1>

          <Row className="mb-5 text-center">
            <Col md={4}>
              <div className="mb-3 text-primary"><FiMail size={32} /></div>
              <h5>Email</h5>
              <p className="text-muted">support@rentaplace.com</p>
            </Col>
            <Col md={4}>
              <div className="mb-3 text-primary"><FiPhone size={32} /></div>
              <h5>Phone</h5>
              <p className="text-muted">+91 98765 43210</p>
            </Col>
            <Col md={4}>
              <div className="mb-3 text-primary"><FiMapPin size={32} /></div>
              <h5>Office</h5>
              <p className="text-muted">Mumbai, India</p>
            </Col>
          </Row>

          <h4 className="fw-bold mb-3">Send us a message</h4>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="How can we help?" />
            </Form.Group>
            <Button variant="primary" className="w-100 fw-bold py-2">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
