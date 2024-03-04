package com.hostel.authentication.service.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping("/home")
public class UserController {
    @GetMapping("/user")
    public String getUser(Principal principal)
    {
        return "user given"+principal.getName();
    }
}
