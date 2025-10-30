package com.mindtech.teste_estagio_back.services;

import com.mindtech.teste_estagio_back.dto.UserDTO;
import com.mindtech.teste_estagio_back.mapStruct.UserMapper;
import com.mindtech.teste_estagio_back.model.User;
import com.mindtech.teste_estagio_back.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Override
    public void subscribeNewsletter(UserDTO userDTO) {

        if (userRepository.findByEmail(userDTO.getEmail()) != null){
            throw new RuntimeException("O Email " + userDTO.getEmail() + " já está cadastrado na newsletter!!!");
        }

        User user = userMapper.toEntity(userDTO);
        user.setRegisterDate(LocalDateTime.now());
        userRepository.save(user);
    }

    @Override
    public void removeFromNewsletter(String email) {
        if (userRepository.findByEmail(email) == null){
            throw new RuntimeException("O Email " + email + " não está cadastrado na newsletter!!!");
        }

        User existingUser = userRepository.findByEmail(email);

        userRepository.delete(existingUser);
    }
}
