package com.mindtech.teste_estagio_back.services;

import com.mindtech.teste_estagio_back.dto.UserDTO;

public interface UserService {

    void subscribeNewsletter(UserDTO userDTO);

    void removeFromNewsletter(String email);
}
