import React, { useState } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { setBudget } from "../services/ApiCalls";

const Budget = ({ project, triggerUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    setBudget(project.id, value)
      .then((r) => {
        triggerUpdate();
        setIsEditing(false);
      })
      .catch((e) => {
        triggerUpdate();
        setIsEditing(false);
      });
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={project.budget} />
      ) : (
        // For part 1 render component inline rather than create a seperate one
        <ViewBudget handleEditClick={handleEditClick} budget={project.budget} />
      )}
    </div>
  );
};

export default Budget;
