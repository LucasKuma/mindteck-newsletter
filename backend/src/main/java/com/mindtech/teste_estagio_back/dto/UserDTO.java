package com.mindtech.teste_estagio_back.dto;

public class UserDTO {

    private String email;

    public UserDTO(){}

    public UserDTO(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
