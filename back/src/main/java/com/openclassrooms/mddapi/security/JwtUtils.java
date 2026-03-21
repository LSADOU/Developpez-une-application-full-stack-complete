package com.openclassrooms.mddapi.security;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtils {

    @Value("${jwt.secret}")
    private String secretKey;
    
    public String generateToken(String email){
        return Jwts.builder()
        .setSubject(email)
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis()+86400000))
        .signWith(Keys.hmacShaKeyFor(this.secretKey.getBytes()),SignatureAlgorithm.HS256)
        .compact();
    }

    public String extractEmail(String token){
        return Jwts.parserBuilder()
        .setSigningKey(Keys.hmacShaKeyFor(this.secretKey.getBytes()))
        .build()
        .parseClaimsJws(token)
        .getBody()
        .getSubject();
    }

    public boolean isTokenValid(String token){
        try {
            Jwts.parserBuilder()
                .setSigningKey(Keys.hmacShaKeyFor(this.secretKey.getBytes()))
                .build()
                .parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

}
