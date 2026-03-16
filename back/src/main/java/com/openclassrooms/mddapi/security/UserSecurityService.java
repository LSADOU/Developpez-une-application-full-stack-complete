package com.openclassrooms.mddapi.security;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.openclassrooms.mddapi.entity.User;
import com.openclassrooms.mddapi.repository.UserRepository;

@Service
public class UserSecurityService implements UserDetailsService{

    private final UserRepository userRepository;

    UserSecurityService(UserRepository ur){
        this.userRepository = ur;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> foundUser = this.userRepository.findByEmail(username);
        if (! foundUser.isPresent()){
            foundUser = this.userRepository.findByUsername(username);
            if (! foundUser.isPresent()){
                throw new UsernameNotFoundException(username);
            }else{
                User existingUser = foundUser.get();
                return org.springframework.security.core.userdetails.User.withUsername(existingUser.getEmail()).password(existingUser.getPassword()).roles("USER").build();//obligé de mettre l'email au lieu du username meme si c'est ce dernier qui a servi à authentifier car dans le token il faut savoir lequel des deux permet d'identifier un utilisateur
            }
        }else{
            User existingUser = foundUser.get();
            return org.springframework.security.core.userdetails.User.withUsername(existingUser.getEmail()).password(existingUser.getPassword()).roles("USER").build();
        }
    }

}
