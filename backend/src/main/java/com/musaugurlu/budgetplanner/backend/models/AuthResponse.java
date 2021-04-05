/*
 * Copyright (c) 2020.
 * Author: Musa Ugurlu
 * Date: 7/5/20, 10:35 PM
 */

package com.musaugurlu.budgetplanner.backend.models;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class AuthResponse {
    private List<String> roles;
    private final String TOKEN;
    private final String firstName;
    private final String lastName;
    private final String email;


    public AuthResponse(String TOKEN, Collection<? extends GrantedAuthority> authorities, String firstName, String lastName, String email) {
        this.TOKEN = TOKEN;
        this.roles = authorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public String getTOKEN() {
        return TOKEN;
    }

    public List<String> getRoles() {
        return roles;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }
}
