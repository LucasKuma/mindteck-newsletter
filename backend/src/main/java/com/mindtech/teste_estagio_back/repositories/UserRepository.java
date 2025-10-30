package com.mindtech.teste_estagio_back.repositories;

import com.mindtech.teste_estagio_back.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    void deleteUserByEmail(String email);
}
