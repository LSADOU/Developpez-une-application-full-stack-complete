package com.openclassrooms.mddapi.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtFilter extends OncePerRequestFilter{

    private final UserSecurityService uss;
    private final JwtUtils jwtU;

    public JwtFilter(UserSecurityService uss, JwtUtils jwtU){
        this.uss = uss;
        this.jwtU = jwtU;
    }
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer")){
            String token = authHeader.substring(7);// on commence à 7 parcequ'il y a un espace entre le token et 'Bearer'
            if (this.jwtU.isTokenValid(token)){
                String email = this.jwtU.extractEmail(token);
                try {
                    UserDetails securityUser = this.uss.loadUserByUsername(email);
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(securityUser, null, securityUser.getAuthorities());
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                } catch (UsernameNotFoundException e){
                    //faire un truc mais quoi?
                }
            }
        }
        filterChain.doFilter(request, response);
    }

}
