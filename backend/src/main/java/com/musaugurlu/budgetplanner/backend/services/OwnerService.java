package com.musaugurlu.budgetplanner.backend.services;

import com.musaugurlu.budgetplanner.backend.models.Owner;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface OwnerService {
    Optional<Owner> findById(Long id);
    Optional<Owner> findByEmail(String email);
    Owner save(Owner owner);
    List<Owner> findAll();
    boolean delete(Owner owner);
}
