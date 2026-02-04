package com.mini.pms.service.impl;

import com.mini.pms.entity.Payment;
import com.mini.pms.entity.type.PaymentStatus;
import com.mini.pms.repository.PaymentRepository;
import com.mini.pms.service.PaymentService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.annotation.PostConstruct;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    @Value("${razorpay.key-id}")
    private String keyId;

    @Value("${razorpay.key-secret}")
    private String keySecret;

    private RazorpayClient client;

    private final PaymentRepository paymentRepository;

    @PostConstruct
    public void init() throws RazorpayException {
        // Initialize only if keys are present (dummy check)
        if (keyId != null && !keyId.contains("PLACEHOLDER")) {
            this.client = new RazorpayClient(keyId, keySecret);
        }
    }

    @Override
    public Order createOrder(double amount) throws RazorpayException {
        if (this.client == null) {
            // Fallback for demo if keys are strictly placeholders, but usually user will
            // replace them.
            // Rethrowing to enforce real keys or handle gracefully.
            if (keyId.contains("PLACEHOLDER")) {
                throw new RuntimeException("Razorpay API Keys are missing. Please configure them in application.yml");
            }
            this.client = new RazorpayClient(keyId, keySecret);
        }

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", (int) (amount * 100)); // amount in the smallest currency unit (paise)
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "txn_" + System.currentTimeMillis());

        return client.orders.create(orderRequest);
    }

    @Override
    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    @Override
    public Payment updatePaymentStatus(Long requestId, String status) {
        return paymentRepository.findByRequestId(requestId)
                .map(payment -> {
                    payment.setStatus(PaymentStatus.valueOf(status.toUpperCase()));
                    return paymentRepository.save(payment);
                })
                .orElseThrow(() -> new RuntimeException("Payment not found with requestId: " + requestId));
    }

    @Override
    public List<Payment> getPaymentsByUser(String email) {
        return paymentRepository.findByUserEmail(email);
    }
}
