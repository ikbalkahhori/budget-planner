import React, { useContext } from "react";
import Budget from "./Budget";
import RemainingBudget from "./Remaining";
import ExpenseTotal from "./ExpenseTotal";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseList from "./ExpenseList";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import { AppContext } from "../data/AppContext";

const ProjectExpense = () => {
  const { projectId } = useParams();
  const { projectList } = useContext(AppContext);
  const project = projectList.filter((p) => p.id === projectId)[0] || {};

  return (
    <Container>
      <h1 className="mt-3"> {project.name}</h1>
      <sub>Project Budget Planner</sub>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget project={project} />
        </div>
        <div className="col-sm">
          <RemainingBudget project={project} />
        </div>
        <div className="col-sm">
          <ExpenseTotal project={project} />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row ">
        <div className="col-sm">
          <ExpenseList project={project} />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm project={project} />
        </div>
      </div>
    </Container>
  );
};

export default ProjectExpense;
