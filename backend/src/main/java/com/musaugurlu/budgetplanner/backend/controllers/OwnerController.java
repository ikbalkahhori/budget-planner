package com.musaugurlu.budgetplanner.backend.controllers;

import com.musaugurlu.budgetplanner.backend.models.Owner;
import com.musaugurlu.budgetplanner.backend.services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/owners")
public class OwnerController {
    @Autowired
    private OwnerService ownerService;

    @GetMapping
    public List<Owner> getOwners() {
        List<Owner> owners = ownerService.findAll();
        owners.forEach(owner -> owner.setPassword("<Encrypted>"));
        return owners;
    }

    @PostMapping("/register")
    public Owner registerOwner(@Valid @RequestBody Owner owner) throws Exception {
        try {
            owner.setPassword(BCrypt.hashpw(owner.getPassword(), BCrypt.gensalt()));
            Owner registeredUser = ownerService.save(owner);
            registeredUser.setPassword("<Encrypted>");
            return registeredUser;
        } catch (Exception e) {
            throw new Exception("Something went wrong", e);
        }
    }

    @PostMapping("/delete")
    public boolean deleteOwner(Owner owner) {
        return ownerService.delete(owner);
    }
}
