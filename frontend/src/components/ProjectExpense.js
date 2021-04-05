import React, { useState, useEffect } from "react";
import Budget from "./Budget";
import RemainingBudget from "./Remaining";
import ExpenseTotal from "./ExpenseTotal";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseList from "./ExpenseList";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import axios from "axios";

const ProjectExpense = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/projects/${projectId}`)
      .then((r) => {
        setProject(r.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [loading]);

  const triggerUpdate = () => {
    setLoading(true);
  };

  if (loading) {
    return <div>Loding...</div>;
  }

  return (
    <Container>
      <h1 className="mt-3"> {project.name}</h1>
      <sub>Project Budget Planner</sub>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget project={project} triggerUpdate={triggerUpdate} />
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
          <AddExpenseForm project={project} triggerUpdate={triggerUpdate} />
        </div>
      </div>
    </Container>
  );
};

export default ProjectExpense;
