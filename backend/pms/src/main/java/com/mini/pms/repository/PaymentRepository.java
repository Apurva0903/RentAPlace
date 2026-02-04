package com.mini.pms.repository;

import com.mini.pms.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByUserEmail(String email);

    Optional<Payment> findByRequestId(Long requestId);
}
