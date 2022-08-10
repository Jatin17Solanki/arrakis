package com.db.grad.javaapi.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Counterparty;
import com.db.grad.javaapi.repository.CounterpartyRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CounterpartyController {

    @Autowired
    private CounterpartyRepository counterpartyRepository;

    @GetMapping("/counterparty")
    public List<Counterparty> getAllCounterparties() {
        return counterpartyRepository.findAll();
    }

    @PostMapping("/createCounterparty")
    public Counterparty createCounterparty(@Valid @RequestBody Counterparty Counterparty) {
        return counterpartyRepository.saveAndFlush(Counterparty);
    }
}