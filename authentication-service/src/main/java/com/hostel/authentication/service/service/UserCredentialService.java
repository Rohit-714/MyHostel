package com.hostel.authentication.service.service;

import com.hostel.authentication.service.entity.UserCredentials;
import com.hostel.authentication.service.repository.UserCredentialsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserCredentialService {
    @Autowired
    private UserCredentialsRepo repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public String saveUser(UserCredentials userCredentials) {
        userCredentials.setPassword(passwordEncoder.encode(userCredentials.getPassword()));
        repository.save(userCredentials);
        return "added successfully";
    }
}
