package com.db.grad.javaapi.model;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "Book_User")
public class BookUser {

    @Id
    private long id;
    private long book_id;
    private long user_id;

    public BookUser(long id, long book_id, long user_id) {
        this.id = id;
        this.book_id = book_id;
        this.user_id = user_id;
    }
    
    public BookUser(){
        
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
    @Column(name = "user_id", nullable = false)
    public long getUserId() {
        return user_id;
    }

    public void setUserId(long user_id) {
        this.user_id = user_id;
    }
}