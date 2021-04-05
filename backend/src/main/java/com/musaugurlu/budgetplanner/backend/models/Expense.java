package com.musaugurlu.budgetplanner.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Entity
public class Expense {
    @Id
    @GeneratedValue
    private Long id;
    @NotNull
    @Size(max = 50, message = "Expense name cannot be more than 50 characters")
    private String name;
    @NotNull
    @Positive
    private double cost;

    public Expense() {
    }

    public Expense(String name, double cost) {
        this.name = name;
        this.cost = cost;
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

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }
}
