package com.db.grad.javaapi.controller;
import java.awt.print.Book;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import com.db.grad.javaapi.model.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.BookUserRepository;
import com.db.grad.javaapi.repository.TradeRepository;
import com.db.grad.javaapi.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user")
    public List <Users> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping("/user/getNames")
    public List<Users> getUsernameByBookId(@RequestParam Long bookId, HttpServletResponse response)
            throws ResourceNotFoundException, IOException{

        List <Users> users = userRepository.findUsersGivenBookId(bookId);
        return users;
    }

    @PostMapping("/createUser")
    public Users createUser(@Valid @RequestBody Users User) {
        return userRepository.saveAndFlush(User);
    }

    @PutMapping("/user/{id}")
    public ResponseEntity < Users > updateUser(@PathVariable(value = "id") Long id,
                                               @Valid @RequestBody Users userDetails) throws ResourceNotFoundException {
        Users User = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + id));
        User.setEmail(userDetails.getEmail());
        User.setId(userDetails.getId());
        User.setName(userDetails.getName());
        User.setRole(userDetails.getRole());

        final Users updatedUser = userRepository.save(User);
        return ResponseEntity.ok(updatedUser);
    }

}