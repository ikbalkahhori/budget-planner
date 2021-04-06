package com.musaugurlu.budgetplanner.backend.services;

import com.musaugurlu.budgetplanner.backend.models.Expense;
import com.musaugurlu.budgetplanner.backend.repositories.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ExpenseServiceImpl implements ExpenseService {
    @Autowired
    private ExpenseRepository expenseRepository;

    @Override
    public Optional<Expense> findById(Long id) {
        return expenseRepository.findById(id);
    }

    @Override
    public void delete(Expense expense) {
        expenseRepository.delete(expense);
    }
}
