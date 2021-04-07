package com.musaugurlu.budgetplanner.backend.controllers;

import com.musaugurlu.budgetplanner.backend.models.Budget;
import com.musaugurlu.budgetplanner.backend.models.Expense;
import com.musaugurlu.budgetplanner.backend.models.Owner;
import com.musaugurlu.budgetplanner.backend.models.Project;
import com.musaugurlu.budgetplanner.backend.services.AuthUserDetails;
import com.musaugurlu.budgetplanner.backend.services.ExpenseService;
import com.musaugurlu.budgetplanner.backend.services.OwnerService;
import com.musaugurlu.budgetplanner.backend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/projects")
public class ProjectController {
    @Autowired
    private OwnerService ownerService;
    @Autowired
    private ProjectService projectService;

    @Autowired
    private ExpenseService expenseService;

    @GetMapping
    public List<Project> getProjects() {
        return projectService.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        return new ResponseEntity<Project>(projectService.save(project), HttpStatus.CREATED);
    }

    @PostMapping("/{id}/delete")
    public ResponseEntity<Boolean> deleteProject(@Valid @PathVariable Long id) {
        Optional<Project> project = projectService.findById(id);
        if (project.isPresent()) {
            projectService.delete(project.get());
            return new ResponseEntity<Boolean>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<Boolean>(false, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public Optional<Project> findById(@PathVariable Long id) {
        return projectService.findById(id);
    }

    @PostMapping("/{id}/addExpense")
    public ResponseEntity<?> addExpense(@PathVariable Long id, @RequestBody Expense expense) {
        Optional<Project> project = projectService.findById(id);
        if(project.isPresent()) {
            List<Expense> pExpenses = project.get().getExpenses();
            pExpenses.add(expense);
            project.get().setExpenses(pExpenses);
            projectService.save(project.get());
        } else {
            return ResponseEntity.badRequest().body("Project with " + id + " id number could not found!");
        }
        return new ResponseEntity<String>("success", HttpStatus.CREATED);
    }

    @PostMapping("/{id}/deleteExpense")
    public ResponseEntity<?> deleteExpense(@PathVariable Long id, @RequestBody Expense expense){
        Optional<Project> project = projectService.findById(id);
        if(project.isPresent()){
            project.get().removeExpense(expense);
            projectService.save(project.get());
            expenseService.delete(expense);
            return new ResponseEntity<String>("success", HttpStatus.OK);
        } else {
            return ResponseEntity.badRequest().body("Project with " + id + " id number could not found!");
        }
    }

    @PostMapping("/{id}/setBudget")
    public ResponseEntity<?> setBudget(@PathVariable Long id, @RequestBody Budget budget) {
        Optional<Project> project = projectService.findById(id);
        if(project.isPresent()) {
            project.get().setBudget(budget.getBudget());
            projectService.save(project.get());
        } else {
            return ResponseEntity.badRequest().body("Project with " + id + " id number could not found!");
        }
        return new ResponseEntity<String>("success", HttpStatus.OK);
    }

}
