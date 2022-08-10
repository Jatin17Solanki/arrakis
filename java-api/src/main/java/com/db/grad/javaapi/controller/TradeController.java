package com.db.grad.javaapi.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

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
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.SecurityRepository;
import com.db.grad.javaapi.repository.TradeRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TradeController {
    @Autowired
    private TradeRepository tradeRepository;
    HttpServletResponse httpResponse;

    @GetMapping("/trade")
    public List < Trade > getAllTrades() {
        return tradeRepository.findAll();
    }

    @GetMapping("/trade/{id}")
    public ResponseEntity < Trade > getTradeById(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        Trade trade = tradeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + id));
        return ResponseEntity.ok().body(trade);
    }

    @GetMapping("/trade/securityId")
    public ResponseEntity<List<Trade>> getTradeBySecurityId(@RequestParam Long securityId)
            throws ResourceNotFoundException {
        return new ResponseEntity<List<Trade>>(tradeRepository.findBySecurityId(securityId), HttpStatus.OK);
    }

    @GetMapping("/trade/bookId")
    public ResponseEntity<List<Trade>> getTradeByBookId(@RequestParam Long bookId)
            throws ResourceNotFoundException {
        return new ResponseEntity<List<Trade>>(tradeRepository.findByBookId(bookId), HttpStatus.OK);
    }

    @RequestMapping(value = "/trade/{id}/security", method = RequestMethod.GET)
    void getSecurity(@PathVariable(value = "id") Long id, HttpServletResponse response) throws IOException, ResourceNotFoundException {
        Trade trade = tradeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + id));

        Long securityId = trade.getSecurityId();
        System.out.println("security ID "+securityId);

        response.sendRedirect("/api/securities/"+securityId);

    }


    @PostMapping("/trade")
    public Trade createTrade(@Valid @RequestBody Trade Trade) {
        return tradeRepository.saveAndFlush(Trade);
    }

    @PutMapping("/trade/{id}")
    public ResponseEntity < Trade > updateTrade(@PathVariable(value = "id") Long id,
                                                 @Valid @RequestBody Trade TradeDetails) throws ResourceNotFoundException {
        Trade getTrade = tradeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + id));

        getTrade.setBookId(TradeDetails.getBookId());
        getTrade.setCounterPartyId(TradeDetails.getCounterPartyId());
        getTrade.setSecurityId(TradeDetails.getSecurityId());
        getTrade.setQuantity(TradeDetails.getQuantity());
        getTrade.setStatus(TradeDetails.getStatus());
        getTrade.setPrice(TradeDetails.getPrice());
        getTrade.setBuySell(TradeDetails.getBuySell());
        getTrade.setTradeDate(TradeDetails.getTradeDate());
        getTrade.setSettlementDate(TradeDetails.getSettlementDate());
        getTrade.setAssigned_to(TradeDetails.getAssigned_to());

        final Trade updatedTrade = tradeRepository.save(getTrade);
        return ResponseEntity.ok(updatedTrade);
    }

    @PutMapping("/trade/updateManager")
    public ResponseEntity < Trade > updateTradeManager(@RequestParam Long tradeId, @RequestParam Long userId) throws ResourceNotFoundException {
        Trade getTrade = tradeRepository.findById(tradeId)
                .orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + tradeId));

        getTrade.setAssigned_to(userId);
        final Trade updatedTrade = tradeRepository.save(getTrade);
        return ResponseEntity.ok(updatedTrade);
    }

    @DeleteMapping("/trade/{id}")
    public Map < String, Boolean > deleteTrade(@PathVariable(value = "id") Long id)
            throws Exception {
        Trade Trade = tradeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + id));

        tradeRepository.delete(Trade);
        Map < String, Boolean > response = new HashMap <>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
