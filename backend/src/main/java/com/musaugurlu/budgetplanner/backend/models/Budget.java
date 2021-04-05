package com.musaugurlu.budgetplanner.backend.models;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Budget {
    double budget;

    public Budget(double budget) {
        this.budget = budget;
    }

    public Budget() {
    }

    public double getBudget() {
        return budget;
    }

    public void setBudget(double budget) {
        this.budget = budget;
    }
}
