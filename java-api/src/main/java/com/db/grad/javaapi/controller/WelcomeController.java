package com.db.grad.javaapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class WelcomeController {

  @GetMapping("/")
  @CrossOrigin
  public String getWelcome() {
    return "Dogs API is up and running!(MOD)";
  }

}
