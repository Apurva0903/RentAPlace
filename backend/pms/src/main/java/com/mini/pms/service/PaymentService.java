package com.mini.pms.service;

import com.mini.pms.entity.Payment;
import com.razorpay.Order;
import com.razorpay.RazorpayException;

import java.util.List;

public interface PaymentService {
    Order createOrder(double amount) throws RazorpayException;

    Payment savePayment(Payment payment);

    Payment updatePaymentStatus(Long requestId, String status);

    List<Payment> getPaymentsByUser(String email);
}
