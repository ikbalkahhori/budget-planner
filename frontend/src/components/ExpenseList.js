import React, { useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ project, triggerUpdate }) => {
  const [filteredExpenses, setFilteredExpenses] = useState(
    project.expenses || []
  );

  useEffect(() => {
    setFilteredExpenses(project.expenses);
  }, [project.expenses]);

  const handleChange = (event) => {
    const searchResults = project.expenses.filter((filtered) =>
      filtered.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredExpenses(searchResults);
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
        {filteredExpenses?.map((expense) => (
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
