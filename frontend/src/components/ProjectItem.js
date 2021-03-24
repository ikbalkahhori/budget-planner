import React, { useContext } from "react";
import { AppContext } from "../data/AppContext";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";

const ProjectItem = ({ id, name, budget }) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteProject = () => {
    dispatch({
      type: "DELETE_PROJECT",
      payload: id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to={"/projects/" + id}>{name}</Link>
      <div>
        <span className="badge badge-primary badge-pill mr-3">${budget}</span>
        <TiDelete size="1.5em" onClick={handleDeleteProject} />
      </div>
    </li>
  );
};

export default ProjectItem;
