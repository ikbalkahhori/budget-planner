package com.musaugurlu.budgetplanner.backend.services;

import com.musaugurlu.budgetplanner.backend.models.Owner;
import com.musaugurlu.budgetplanner.backend.models.Project;
import com.musaugurlu.budgetplanner.backend.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectServiceImpl() {
    }

    @Override
    public List<Project> findAll() {
        return projectRepository.findAll();
    }

    @Override
    public Optional<Project> findById(Long id) {
        return projectRepository.findById(id);
    }

    @Override
    public Optional<Project> findByName(String name) {
        return projectRepository.findProjectByName(name);
    }

    @Override
    public Project save(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public void delete(Project project) {
        try {
            projectRepository.delete(project);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
