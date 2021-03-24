import React from "react";

const RemainingBudget = ({ project }) => {
  const totalExpenses = project.expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType =
    totalExpenses > project.budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>Remaining: ${project.budget - totalExpenses}</span>
    </div>
  );
};

export default RemainingBudget;
