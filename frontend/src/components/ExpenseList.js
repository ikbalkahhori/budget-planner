import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ project, triggerUpdate }) => {
  const [filteredExpenses, setfilteredExpenses] = useState(
    project.expenses || []
  );

  useEffect(() => {
    setfilteredExpenses(project.expenses);
  }, [project.expenses]);

  const handleChange = (event) => {
    const searchResults = project.expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <ul className="list-group mt-3 mb-3">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            projectId={project.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
            triggerUpdate={triggerUpdate}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
