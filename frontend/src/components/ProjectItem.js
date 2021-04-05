import axios from "axios";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";

const ProjectItem = ({ id, name, budget, triggerUpdate }) => {
  const handleDeleteProject = () => {
    axios
      .post(`/projects/${id}/delete`)
      .then((r) => {
        triggerUpdate();
      })
      .catch((e) => {
        console.log(e);
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
