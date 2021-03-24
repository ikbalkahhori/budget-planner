import React, { useContext, useState } from "react";
import { AppContext } from "../data/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddProjectForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const project = {
      id: uuidv4(),
      name,
      budget: parseInt(budget),
      expenses: [],
    };

    dispatch({
      type: "ADD_PROJECT",
      payload: project,
      projectId: "",
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
