package com.project.physiobook.controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")  // Base URL for all APIs
public class LoginController {

    @PostMapping("/login")  // Complete URL: /api/login
    public String login(@RequestParam String loginId, @RequestParam String password) {
        if ("admin".equals(loginId) && "1234".equals(password)) {
            return "Login successful!";
        } else {
            return "Invalid credentials!";
        }
    }
}
