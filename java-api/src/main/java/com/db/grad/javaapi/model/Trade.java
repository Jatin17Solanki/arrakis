//TODO: check date format wherever relevant

package com.db.grad.javaapi.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Trade")
public class Trade {

    @Id
    private long id;
    private long book_id;
    private long counterparty_id;
    private long security_id;
    private long quantity;
    private String status;
    private float price;
    private String buy_sell;
    private String trade_date;
    private String settlement_date;
    private long assigned_to;

    
    
    public Trade(){
        
    }

    public Trade(long id, long book_id, long counterparty_id, long security_id, long quantity, String status, float price, String buy_sell, String trade_date, String settlement_date, long assigned_to) {
        this.id = id;
        this.book_id = book_id;
        this.counterparty_id = counterparty_id;
        this.security_id = security_id;
        this.quantity = quantity;
        this.status = status;
        this.price = price;
        this.buy_sell = buy_sell;
        this.trade_date = trade_date;
        this.settlement_date = settlement_date;
        this.assigned_to = assigned_to;
    }

    @Id
    public long getId() {
        return id;
    }

    public void setId(long id) {
        
        this.id = id;
    }

    @Column(name = "book_id", nullable = false)
    public long getBookId() {
        return book_id;
    }

    public void setBookId(long book_id) {
        this.book_id = book_id;
    }

    @Column(name = "counterparty_id", nullable = false)
    public long getCounterPartyId() {
        return counterparty_id;
    }

    public void setCounterPartyId(long counterparty_id) {
        this.counterparty_id = counterparty_id;
    }

    @Column(name = "security_id", nullable = false)
    public long getSecurityId() {
        return security_id;
    }

    public void setSecurityId(long security_id) {
        this.security_id = security_id;
    }

    @Column(name = "quantity", nullable = false)
    public long getQuantity() {
        return quantity;
    }
    
    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    @Column(name = "status", nullable = false)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    @Column(name = "price", nullable = false)
    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
    @Column(name = "buy_sell", nullable = false)
    public String getBuySell() {
        return buy_sell;
    }

    public void setBuySell(String buy_sell) {
        this.buy_sell = buy_sell;
    }

    @Column(name = "trade_date", nullable = false)
    public String getTradeDate() {
        return trade_date;
    }

    public void setTradeDate(String trade_date) {
        this.trade_date = trade_date;
    }
    @Column(name = "settlement_date")
    public String getSettlementDate() {
        return settlement_date;
    }

    public void setSettlementDate(String settlement_date) {
        this.settlement_date = settlement_date;
    }

    @Column(name = "assigned_to")
    public long getAssigned_to() {
        return assigned_to;
    }

    public void setAssigned_to(long assigned_to) {
        this.assigned_to = assigned_to;
    }
}

