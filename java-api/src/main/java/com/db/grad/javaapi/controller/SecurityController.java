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
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.BookUserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class SecurityController {

    @Autowired
    private SecurityRepository securityRepository;
    private BookUserRepository bookUserRepository;
    private BookUserController bookUserController;

    @GetMapping("/securities")
    public List<Security> getAllSecurities() {
        return securityRepository.findAll();
    }

    @GetMapping("/securities/dateRange/{date1}/{date2}")
    public List<Security> getSecuritiesBetweenDates(@PathVariable(value = "date1") @DateTimeFormat(pattern = "yyyy-MM-d") LocalDate startDate,
                                               @PathVariable(value = "date2") @DateTimeFormat(pattern = "yyyy-MM-d") LocalDate endDate)  {

        List <Security> securities = securityRepository.findSecuritiesBetweenDates(startDate, endDate);
        return securities;
    }


    @GetMapping("/securities/status")
    public ResponseEntity<List< Security >> getMaturedSecurities(@RequestParam String statusType)
            throws ResourceNotFoundException{
        return new ResponseEntity<List<Security>>(securityRepository.findSecuritiesByStatus(statusType), HttpStatus.OK);
    }

    @GetMapping("/securities/{id}")
    public ResponseEntity < Security > getSecurityById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Security security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));

        return ResponseEntity.ok().body(security);
    }

    
    @GetMapping("/securities/userId")
    public List<Security> getSecurityByUserId(@RequestParam Long userId, HttpServletResponse response)
            throws ResourceNotFoundException, IOException{

        List <Security> securities = securityRepository.findSecuritiesByUserId(userId);
        return securities;
    }

    
    @PostMapping("/securities")
    public Security createSecurity(@Valid @RequestBody Security Security) {
        return securityRepository.saveAndFlush(Security);
    }

    @PutMapping("/securities/{id}")
    public ResponseEntity < Security > updateSecurity(@PathVariable(value = "id") Long id,
                                               @Valid @RequestBody Security securityDetails) throws ResourceNotFoundException {
        Security getSecurity = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));

        getSecurity.setISIN(securityDetails.getISIN());
        getSecurity.setCUSIP(securityDetails.getCUSIP());
        getSecurity.setIssuer(securityDetails.getIssuer());
        getSecurity.setMaturityDate(securityDetails.getMaturityDate());
        getSecurity.setCoupon(securityDetails.getCoupon());
        getSecurity.setType(securityDetails.getType());
        getSecurity.setFaceValue(securityDetails.getFaceValue());
        getSecurity.setStatus(securityDetails.getStatus());

        final Security updatedSecurities = securityRepository.save(getSecurity);
        return ResponseEntity.ok(updatedSecurities);
    }

    @DeleteMapping("/securities/{id}")
    public Map < String, Boolean > deleteSecurity(@PathVariable(value = "id") Long id)
            throws Exception {
        Security Security = securityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));

        securityRepository.delete(Security);
        Map < String, Boolean > response = new HashMap <>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
