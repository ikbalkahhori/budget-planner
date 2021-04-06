package com.musaugurlu.budgetplanner.backend.repositories;

import com.musaugurlu.budgetplanner.backend.models.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
