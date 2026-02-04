import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccess = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [paymentDetails, setPaymentDetails] = useState(null);

    useEffect(() => {
        // Get payment details from URL params
        const txnId = searchParams.get('txn');
        const amount = searchParams.get('amount');

        if (txnId) {
            setPaymentDetails({
                transactionId: txnId,
                amount: amount || 'N/A',
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString()
            });
        }
    }, [searchParams]);

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Card className="shadow-lg border-0" style={{ maxWidth: '500px', width: '100%', borderRadius: '15px' }}>
                <Card.Body className="text-center p-5">
                    <div className="mb-4">
                        <FaCheckCircle size={80} className="text-success" />
                    </div>

                    <h2 className="fw-bold mb-3">Payment Successful!</h2>
                    <p className="text-muted mb-4">
                        Your payment has been processed successfully. Thank you for your booking!
                    </p>

                    {paymentDetails && (
                        <div className="bg-light p-4 rounded mb-4 text-start">
                            <h5 className="fw-bold mb-3">Payment Details</h5>
                            <div className="mb-2">
                                <strong>Transaction ID:</strong>
                                <p className="text-muted mb-0">{paymentDetails.transactionId}</p>
                            </div>
                            <div className="mb-2">
                                <strong>Amount:</strong>
                                <p className="text-muted mb-0">₹{paymentDetails.amount}</p>
                            </div>
                            <div className="mb-2">
                                <strong>Date:</strong>
                                <p className="text-muted mb-0">{paymentDetails.date}</p>
                            </div>
                            <div>
                                <strong>Time:</strong>
                                <p className="text-muted mb-0">{paymentDetails.time}</p>
                            </div>
                        </div>
                    )}

                    <div className="d-grid gap-2">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => navigate('/my-offers')}
                        >
                            View My Offers
                        </Button>
                        <Button
                            variant="outline-secondary"
                            onClick={() => navigate('/')}
                        >
                            Back to Home
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PaymentSuccess;
