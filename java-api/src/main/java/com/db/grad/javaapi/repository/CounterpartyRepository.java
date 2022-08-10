package com.db.grad.javaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.db.grad.javaapi.model.Counterparty;


@Repository
public interface CounterpartyRepository extends JpaRepository<Counterparty, Long>{

}