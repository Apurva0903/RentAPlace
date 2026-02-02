package com.mini.pms.service;

import com.razorpay.Order;
import com.razorpay.RazorpayException;

public interface PaymentService {
    Order createOrder(double amount) throws RazorpayException;
}
