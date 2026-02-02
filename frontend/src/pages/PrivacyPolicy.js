import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrivacyPolicy = () => {
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={10} className="bg-white shadow-sm p-5 rounded border-0">
                    <h1 className="fw-bold mb-4">Privacy Policy</h1>
                    <p className="text-muted">Last updated: February 2026</p>

                    <h4 className="fw-bold mt-4">1. Introduction</h4>
                    <p>
                        Welcome to <strong>RentAPlace</strong>. Your privacy is important to us. This policy explains how we collect,
                        use, and protect your personal data when you use our website.
                    </p>

                    <h4 className="fw-bold mt-4">2. Information We Collect</h4>
                    <p>
                        We collect information you provide directly to us, such as when you create an account, post a property,
                        or book a visit. This may include your name, email address, phone number, and payment information.
                    </p>

                    <h4 className="fw-bold mt-4">3. How We Use Your Data</h4>
                    <p>
                        We use your data to:
                        <ul>
                            <li>Provide and maintain our services.</li>
                            <li>Process transactions and bookings.</li>
                            <li>Send you updates and promotional materials (you can opt-out).</li>
                        </ul>
                    </p>

                    <h4 className="fw-bold mt-4">4. Data Security</h4>
                    <p>
                        We implement industry-standard security measures to protect your data. However, no method of transmission
                        over the internet is 100% secure.
                    </p>

                    <h4 className="fw-bold mt-4">5. Contact Us</h4>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <strong>privacy@rentaplace.com</strong>.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default PrivacyPolicy;
