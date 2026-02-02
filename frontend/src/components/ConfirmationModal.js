import React, { useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import { formatMoney } from '../utils/money';
import { api } from '../libs/api';

const ConfirmationModal = ({ show, onHide, propertyId, price, onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Hardcoded token amount or percentage could be used
    const tokenAmount = 5000;

    const handleBooking = async () => {
        setLoading(true);
        setError(null);
        try {
            // 1. Create Order on Backend
            const orderRes = await api.post('/payment/create-order', { amount: tokenAmount });
            const order = typeof orderRes.data === 'string' ? JSON.parse(orderRes.data) : orderRes.data;

            if (!window.Razorpay) {
                throw new Error("Razorpay SDK not loaded. Please check internet connection.");
            }

            const options = {
                key: "rzp_test_SAuLIKBj4mgzRD", // Enter the Key ID generated from the Dashboard
                amount: order.amount,
                currency: order.currency,
                name: "RentAPlace",
                description: "Property Booking Token",
                image: "https://example.com/your_logo",
                order_id: order.id,
                handler: async function (response) {
                    // 2. On Success, Book Property
                    try {
                        await api.post('/offers/book', {
                            propertyId,
                            price: tokenAmount,
                            remark: `Paid via Razorpay (Payment ID: ${response.razorpay_payment_id})`
                        });
                        onSuccess();
                        onHide();
                    } catch (err) {
                        setError('Payment successful but booking failed. Contact support.');
                    }
                },
                prefill: {
                    name: "Customer Name",
                    email: "customer@example.com",
                    contact: "9999999999"
                },
                theme: {
                    color: "#ff3f6c"
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                setError(`Payment Failed: ${response.error.description}`);
            });
            rzp1.open();

        } catch (err) {
            const errorData = err.response?.data;
            let errorMessage = 'Initialization failed. Check Console for details.';

            if (errorData) {
                if (typeof errorData === 'string') {
                    errorMessage = errorData;
                } else if (errorData.message) {
                    errorMessage = errorData.message;
                } else {
                    errorMessage = JSON.stringify(errorData);
                }
            } else if (err.message) {
                errorMessage = err.message;
            }
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Confirm Booking</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center mb-4">
                    <h5>Pay Token Amount to Book</h5>
                    <h2 className="text-primary fw-bold my-3">{formatMoney(tokenAmount)}</h2>
                    <p className="text-muted small">
                        Total Price: {formatMoney(price)}
                    </p>
                </div>

                {error && <div className="alert alert-danger small">{error}</div>}

                <div className="alert alert-info small d-flex align-items-center">
                    <i className="bi bi-shield-lock-fill me-2 fs-5"></i>
                    <div>
                        <strong>Secure Transaction</strong><br />
                        Payments processed securely via Razorpay.
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide} disabled={loading}>
                    Cancel
                </Button>
                <Button variant="success" onClick={handleBooking} disabled={loading} className="px-4 fw-bold">
                    {loading ? <Spinner size="sm" animation="border" /> : 'Pay Now'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;
