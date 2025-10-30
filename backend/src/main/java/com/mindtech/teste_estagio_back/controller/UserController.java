package com.mindtech.teste_estagio_back.controller;

import com.mindtech.teste_estagio_back.dto.UserDTO;
import com.mindtech.teste_estagio_back.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173x`")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/newsletter")
    public ResponseEntity<Void> subscribeNewsletter(@RequestBody UserDTO userDTO) {
        userService.subscribeNewsletter(userDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/newsletter")
    public ResponseEntity<Void> removeFromNewsletter(@RequestParam String email) {
        userService.removeFromNewsletter(email);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
