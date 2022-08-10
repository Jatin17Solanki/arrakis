package com.db.grad.javaapi.model;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Security")
public class Security {

    @Id
    private long id;
    private String ISIN;
    private String CUSIP;
    private String issuer;
    private String maturity_Date;
    private float coupon;
    private String type;
    private float face_Value;
    private String status;

    public Security(long id, String ISIN, String CUSIP, String issuer, String maturity_Date, float coupon, String type, float face_Value, String status) {
        this.id = id;
        this.ISIN = ISIN;
        this.CUSIP = CUSIP;
        this.issuer = issuer;

        //TODO: check format
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-d");
//        LocalDate localDate = LocalDate.parse(maturity_Date, formatter);
        this.maturity_Date = maturity_Date;

        this.coupon = coupon;
        this.type = type;
        this.face_Value = face_Value;
        this.status = status;
    }

    public Security() {
        
    }
    
    @Id
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "ISIN", nullable = false)
    public String getISIN() {
        return ISIN;
    }

    public void setISIN(String ISIN) {
        this.ISIN = ISIN;
    }

    @Column(name = "CUSIP", nullable = false)
    public String getCUSIP() {
        return CUSIP;
    }

    public void setCUSIP(String CUSIP) {
        this.CUSIP = CUSIP;
    }

    @Column(name = "issuer", nullable = false)
    public String getIssuer() {
        return issuer;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    @Column(name = "maturity_Date", nullable = false)
    public String getMaturityDate() {
        return maturity_Date;
    }

    public void setMaturityDate(String maturity_Date) {
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-d");
//        LocalDate localDate = LocalDate.parse(maturity_Date, formatter);
//        this.maturity_Date = localDate.toString();

        this.maturity_Date = maturity_Date;
    }

    @Column(name = "coupon", nullable = false)
    public float getCoupon() {
        return coupon;
    }

    public void setCoupon(float coupon) {
        this.coupon = coupon;
    }

    @Column(name = "type", nullable = false)
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Column(name = "face_Value", nullable = false)
    public float getFaceValue() {
        return face_Value;
    }

    public void setFaceValue(float face_Value) {
        this.face_Value = face_Value;
    }

    @Column(name = "status", nullable = false)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

//TODO: confirm the date format