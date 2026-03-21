package com.openclassrooms.mddapi.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.openclassrooms.mddapi.dto.request.LoginRequest;
import com.openclassrooms.mddapi.dto.request.RegisterRequest;
import com.openclassrooms.mddapi.dto.request.UpdateUserRequest;
import com.openclassrooms.mddapi.dto.response.AuthResponse;
import com.openclassrooms.mddapi.dto.response.UserResponse;
import com.openclassrooms.mddapi.service.AuthService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/api/auth")
public class AuthController {
     
    private AuthService authService;

    public AuthController(AuthService as){
        this.authService = as;
    }

    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest rr) {
        return this.authService.register(rr);
    }
    
    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest lr) {
        return this.authService.login(lr);
    }
    
    @GetMapping("/me")
    public UserResponse me(@AuthenticationPrincipal UserDetails ud) {
        return this.authService.getUserInfo(ud.getUsername());
    }

    @PutMapping("/me")
    public UserResponse update(@AuthenticationPrincipal UserDetails ud, @RequestBody UpdateUserRequest uur) {
        return this.authService.updateUserInfo(ud.getUsername(), uur);
    }
    

}
