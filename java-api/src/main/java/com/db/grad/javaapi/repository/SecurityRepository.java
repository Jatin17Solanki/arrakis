package com.db.grad.javaapi.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Long>{
    @Query(value = "SELECT * FROM Security WHERE maturity_date >= :startDate AND maturity_date <= :endDate", nativeQuery = true)
    List<Security> findSecuritiesBetweenDates(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    List<Security> findSecuritiesByStatus(String status);

    @Query(value = "select *  from Security where id in (select distinct securityId from Trade where bookId in (select distinct bookId from BookUser where userId= :userId))", nativeQuery = true)
    List<Security> findSecuritiesByUserId(@Param("userId") Long userId);
}