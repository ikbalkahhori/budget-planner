package com.musaugurlu.budgetplanner.backend.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.util.*;

@Entity
public class Project {
    @Id
    @GeneratedValue
    private Long id;
    @NotNull
    @Size(max = 50, message = "Project name cannot be more than 50 characters")
    private String name;
    @NotNull
    @Positive
    private double budget;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Expense> expenses;

    public Project() {
    }

    public Project(String name, double budget) {
        this.name = name;
        this.budget = budget;
        this.expenses = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBudget() {
        return budget;
    }

    public void setBudget(double budget) {
        this.budget = budget;
    }

    public List<Expense> getExpenses() {
        return expenses;
    }

    public void setExpenses(List<Expense> expenses) {
        this.expenses = expenses;
    }
}
