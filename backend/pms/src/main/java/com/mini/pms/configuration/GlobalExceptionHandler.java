package com.mini.pms.configuration;

import com.mini.pms.customexception.PlatformException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(PlatformException.class)
    public ResponseEntity<Map<String, Object>> handlePlatformException(PlatformException ex) {
        Map<String, Object> body = new HashMap<>();
        body.put("status", ex.getHttpStatusCode().value());
        body.put("message", ex.getMessage());
        body.put("code2", ex.getHttpStatusCode().value()); // Keep code2 for frontend compatibility if needed
        return new ResponseEntity<>(body, ex.getHttpStatusCode());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGeneralException(Exception ex) {
        Map<String, Object> body = new HashMap<>();
        body.put("status", 500);
        body.put("message", ex.getMessage());
        return new ResponseEntity<>(body, org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
