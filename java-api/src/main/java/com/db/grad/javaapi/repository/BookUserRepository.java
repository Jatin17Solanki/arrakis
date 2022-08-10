package com.db.grad.javaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.db.grad.javaapi.model.BookUser;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.model.Users;

@Repository
public interface BookUserRepository extends JpaRepository<BookUser, Long>{
    List<BookUser> findByUserId(Long userId);

}	