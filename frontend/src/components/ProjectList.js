import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { AppContext } from "../data/AppContext";
import AddProjectForm from "./AddBudgetForm";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const { projectList } = useContext(AppContext);
  const [filteredPL, setfilteredPL] = useState(projectList || []);

  useEffect(() => {
    setfilteredPL(projectList);
  }, [projectList]);

  const handleChange = (event) => {
    const searchResults = projectList.filter((filtered) =>
      filtered.name.toLowerCase().includes(event.target.value)
    );
    setfilteredPL(searchResults);
  };

  return (
    <Container>
      <h1>My Projects</h1>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />
      <ul className="list-group mt-3 mb-3">
        {filteredPL.map((projectList) => (
          <ProjectItem
            key={projectList.id}
            id={projectList.id}
            name={projectList.name}
            budget={projectList.budget}
          />
        ))}
      </ul>
      <br />
      <h3 className="mt-3">Add Project</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddProjectForm />
        </div>
      </div>
    </Container>
  );
};

export default ProjectList;
