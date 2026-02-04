package com.mini.pms.restcontroller;

import com.mini.pms.entity.Payment;
import com.mini.pms.entity.type.PaymentStatus;
import com.mini.pms.service.PaymentService;
import com.razorpay.Order;
import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/payment")
@CrossOrigin
public class PaymentRestController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody Map<String, Object> data) {
        try {
            double amount = Double.parseDouble(data.get("amount").toString());
            Order order = paymentService.createOrder(amount);
            return ResponseEntity.ok(order.toString());
        } catch (RazorpayException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> savePayment(@RequestBody Payment payment, Principal principal) {
        try {
            if (principal != null) {
                payment.setUserEmail(principal.getName());
            }
            Payment savedPayment = paymentService.savePayment(payment);
            return ResponseEntity.ok(savedPayment);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/history")
    public ResponseEntity<?> getPaymentHistory(Principal principal) {
        try {
            if (principal == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated");
            }
            List<Payment> payments = paymentService.getPaymentsByUser(principal.getName());
            return ResponseEntity.ok(payments);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(@RequestBody Map<String, Object> data) {
        try {
            Long requestId = Long.parseLong(data.get("requestId").toString());
            String status = data.get("status").toString();
            Payment updatedPayment = paymentService.updatePaymentStatus(requestId, status);
            return ResponseEntity.ok(updatedPayment);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
