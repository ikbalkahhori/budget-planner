package com.musaugurlu.budgetplanner.backend.services;

import com.musaugurlu.budgetplanner.backend.models.Expense;

import java.util.Optional;

public interface ExpenseService {
    Optional<Expense> findById(Long id);
    void delete(Expense expense);
}
