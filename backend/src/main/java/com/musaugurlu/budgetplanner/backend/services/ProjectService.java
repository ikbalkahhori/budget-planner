package com.musaugurlu.budgetplanner.backend.services;

import com.musaugurlu.budgetplanner.backend.models.Owner;
import com.musaugurlu.budgetplanner.backend.models.Project;

import java.util.List;
import java.util.Optional;

public interface ProjectService {
    List<Project> findAll();
    Optional<Project> findById(Long id);
    Optional<Project> findByName(String name);
    Project save(Project project);
    void delete(Project project);
}
