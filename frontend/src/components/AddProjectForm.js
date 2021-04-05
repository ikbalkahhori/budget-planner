import axios from "axios";
import React, { useState } from "react";

const AddProjectForm = ({ triggerUpdate }) => {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const project = {
      name,
      budget: parseFloat(budget),
      expenses: [],
    };
    axios
      .post("/projects/create", project)
      .then((r) => {
        triggerUpdate();
      })
      .catch((e) => {
        console.log(e.response);
      });

    setName("");
    setBudget("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="budget">Budget</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="budget"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProjectForm;
