import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { getProjects } from "../services/ApiCalls";
import AddProjectForm from "./AddProjectForm";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [filteredPL, setFilteredPL] = useState(projects || []);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      getProjects()
        .then((r) => {
          setProjects(r.data);
          setFilteredPL(r.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e.response);
          if (e.response.status && e.response.status === 401) {
            localStorage.removeItem("token");
            toast.error("Session Expired. Please login again");
            history.push("/login");
          }
          if (e.response.status && e.response.status === 403) {
            toast.error("🔥 Unauthorized. Please login again");
            history.push("/login");
          }
        });
    }
  }, [loading]);

  const handleChange = (event) => {
    const searchResults = projects.filter((filtered) =>
      filtered.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPL(searchResults);
  };

  const triggerUpdate = () => {
    console.log("Triggering!!!");
    setLoading(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
        {filteredPL?.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            name={project.name}
            budget={project.budget}
            triggerUpdate={triggerUpdate}
          />
        ))}
      </ul>
      <br />
      <h3 className="mt-3">Add Project</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddProjectForm triggerUpdate={triggerUpdate} />
        </div>
      </div>
    </Container>
  );
};

export default ProjectList;
