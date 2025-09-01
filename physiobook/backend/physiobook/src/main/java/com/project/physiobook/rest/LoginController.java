package com.project.physiobook.rest;

import com.project.physiobook.deligate.LoginDeligate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LoginController {

    @Autowired
    private LoginDeligate loginDeligate;

    @PostMapping("/login")
    public String login(@RequestParam String loginId, @RequestParam String password) {
        return loginDeligate.loginValidCheck(loginId, password);
    }
}
