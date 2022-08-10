package com.db.grad.javaapi.repository;

import java.util.List;

import com.db.grad.javaapi.model.Users;
import com.db.grad.javaapi.model.BookUser;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long>{
    @Query(value = "select * from users where users.id in (select user_id from book_user where book_id = :bookId)", nativeQuery = true)
    List<Users> findUsersGivenBookId(@Param("bookId") Long bookId);

}

