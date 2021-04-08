/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/5/20, 7:45 PM
 */

package com.musaugurlu.budgetplanner.backend.controllers;

import com.musaugurlu.budgetplanner.backend.configurations.JWTUtil;
import com.musaugurlu.budgetplanner.backend.models.AuthRequest;
import com.musaugurlu.budgetplanner.backend.models.AuthResponse;
import com.musaugurlu.budgetplanner.backend.models.Owner;
import com.musaugurlu.budgetplanner.backend.services.AuthUserDetailsService;
import com.musaugurlu.budgetplanner.backend.services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/auth/")
public class AuthController {
    @Autowired
    private OwnerService ownerService;

    @Autowired
    private AuthUserDetailsService authUserDetailsService;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("login")
    public ResponseEntity<?> createAuthToken(@Valid @RequestBody AuthRequest request) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Invalid username or password", e);
        } catch (UsernameNotFoundException e) {
            throw new Exception("Username is not provided", e);
        } catch (InsufficientAuthenticationException e) {
            throw new Exception("Insufficient Authentication", e);
        } catch (InternalAuthenticationServiceException e) {
            throw new Exception("Internal Error", e);
        } catch (IllegalArgumentException e) {
            throw new Exception("Invalid Credentials", e);
        } catch (Exception e) {
            throw new Exception("Something went wrong", e);
        }

        final UserDetails userDetails = authUserDetailsService.loadUserByUsername(request.getEmail());
        final String token = jwtUtil.generateToken(userDetails);
        Optional<Owner> owner = ownerService.findByEmail(request.getEmail());
        return ResponseEntity.ok(new AuthResponse(
                token,
                userDetails.getAuthorities(),
                owner.get().getFirstName(),
                owner.get().getLastName(),
                owner.get().getEmail()
        ));
    }
}
