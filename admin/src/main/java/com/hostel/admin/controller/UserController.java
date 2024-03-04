package com.hostel.admin.controller;

import com.hostel.admin.dto.UserDto;
import com.hostel.admin.entity.User;
import com.hostel.admin.response.ResponseHandler;
import com.hostel.admin.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public ResponseEntity<Object> addUser(@RequestBody UserDto userDto) {
        try {
            UserDto savedUser = userService.saveUpdateUser(userDto);
            return ResponseHandler.generateResponse("User Created", HttpStatus.OK, savedUser);
        } catch (Exception e) {
            return ResponseHandler.generateResponse("User unable to create", HttpStatus.UNPROCESSABLE_ENTITY, null);
        }
    }

    @GetMapping("/user")
    public ResponseEntity<Object> getUser() {
        try {
            List<UserDto> users = userService.getUser();
            return ResponseHandler.generateResponse("Users are listed", HttpStatus.OK, users);
        } catch (Exception e) {
            return ResponseHandler.generateResponse("unable to find users", HttpStatus.UNPROCESSABLE_ENTITY, null);
        }
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<Object> getUser(Long id) {
        try {
           UserDto users = userService.getUserByID(id);
            return ResponseHandler.generateResponse("User are listed", HttpStatus.OK, users);
        } catch (Exception e) {
            return ResponseHandler.generateResponse("unable to find user", HttpStatus.UNPROCESSABLE_ENTITY, null);
        }
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Object> deleteUser(@PathVariable Long id) {
        try {
            userService.removeUser(id);
            return ResponseHandler.generateResponse("User deleted by id", HttpStatus.OK, null);
        } catch (Exception e) {
            return ResponseHandler.generateResponse("User can't delete", HttpStatus.UNPROCESSABLE_ENTITY, null);
        }
    }

    @PatchMapping("/user")
    public ResponseEntity<Object> updateUser(@RequestBody UserDto userDto) {
        try {
            UserDto savedUser = userService.saveUpdateUser(userDto);
            return ResponseHandler.generateResponse("User Created", HttpStatus.OK, savedUser);
        } catch (Exception e) {
            return ResponseHandler.generateResponse("User unable to create", HttpStatus.UNPROCESSABLE_ENTITY, null);
        }
    }

}

