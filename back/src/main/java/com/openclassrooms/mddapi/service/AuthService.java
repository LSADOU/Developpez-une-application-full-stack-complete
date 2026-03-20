package com.openclassrooms.mddapi.service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.openclassrooms.mddapi.dto.request.LoginRequest;
import com.openclassrooms.mddapi.dto.request.RegisterRequest;
import com.openclassrooms.mddapi.dto.request.UpdateUserRequest;
import com.openclassrooms.mddapi.dto.response.UserResponse;
import com.openclassrooms.mddapi.entity.User;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.security.JwtUtils;

@Service
public class AuthService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private JwtUtils jwtUtils;
    private AuthenticationManager authenticationManager;

    public AuthService(UserRepository ur, PasswordEncoder pe, JwtUtils ju, AuthenticationManager am){
        this.userRepository = ur;
        this.passwordEncoder = pe;
        this.jwtUtils = ju;
        this.authenticationManager = am;
    }

    public String register(RegisterRequest rr){
        Optional<User> foundUser = this.userRepository.findByEmail(rr.getEmail());
        if(foundUser.isPresent()){
            throw new RuntimeException("Email déjà utilisé");
        }else{
            User userToRegister = new User();
            userToRegister.setEmail(rr.getEmail());
            userToRegister.setPassword(this.passwordEncoder.encode(rr.getPassword()));
            userToRegister.setUsername(rr.getUsername());
            this.userRepository.save(userToRegister);
            return this.jwtUtils.generateToken(rr.getEmail());
        }
    }

    public String login(LoginRequest lr){
        Optional<User> foundUser = this.userRepository.findByEmail(lr.getIdentifier());
        if(! foundUser.isPresent()){
            foundUser = this.userRepository.findByUsername(lr.getIdentifier());
        }
        if(foundUser.isPresent()){   
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(foundUser.get().getEmail(), lr.getPassword()));
            return this.jwtUtils.generateToken(foundUser.get().getEmail());
        }else{
            throw new RuntimeException("Echec de l'authentification");
        }
    }

    public UserResponse getUserInfo(String resquestEmail){
        Optional<User> foundUser = this.userRepository.findByEmail(resquestEmail);
        if(foundUser.isPresent()){
            UserResponse ur = new UserResponse();
            ur.setEmail(foundUser.get().getEmail());
            ur.setUsername(foundUser.get().getUsername());
            return ur;
        }else{
            throw new RuntimeException("Utilisateur non trouvé: "+resquestEmail);
        }
    }

    public UserResponse updateUserInfo(String actualUserEmail, UpdateUserRequest uur){
        Optional<User> foundUser = this.userRepository.findByEmail(actualUserEmail);
        if(foundUser.isPresent()){
            if(uur.getEmail() != null){
                Optional<User> foundUserWithNewEmail = this.userRepository.findByEmail(uur.getEmail());
                if(foundUserWithNewEmail.isPresent()){
                    throw new RuntimeException("nouvelle adresse email déjà utilisé");
                }
            }
            foundUser.get().setEmail(uur.getEmail() != null ? uur.getEmail() : foundUser.get().getEmail());
            foundUser.get().setUsername(uur.getUsername() != null ? uur.getUsername() : foundUser.get().getUsername());
            foundUser.get().setPassword(uur.getPassword() != null ? this.passwordEncoder.encode(uur.getPassword()) : foundUser.get().getPassword());
            this.userRepository.save(foundUser.get());
            UserResponse updatedUserDTO = new UserResponse();
            updatedUserDTO.setEmail(foundUser.get().getEmail());
            updatedUserDTO.setUsername(foundUser.get().getUsername());
            return updatedUserDTO;
        }else{
            throw new RuntimeException("Utilisateur non trouvé lors de la mise à jour");
        }
    }


}
