package com.mindtech.teste_estagio_back.mapStruct;

import com.mindtech.teste_estagio_back.dto.UserDTO;
import com.mindtech.teste_estagio_back.model.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDTO toDTO(User user);

    User toEntity(UserDTO userDTO);
}
