package com.secondmicro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/second")
public class SecondController {

    @Autowired
    RestTemplate restTemplate;
    @GetMapping("/message")
    public String test() {
        String s=restTemplate.getForObject("http://FIRST-MICROSERVICE/first/message",String.class);

        return "Hello this is my Second Service "+s;
    }

}