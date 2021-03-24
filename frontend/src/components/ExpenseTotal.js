import React from "react";

const ExpenseTotal = ({ project }) => {
  const total = project.expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary p-4">
      <span>Spent so far: ${total}</span>
    </div>
  );
};

export default ExpenseTotal;
