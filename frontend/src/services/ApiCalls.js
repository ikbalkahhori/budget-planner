import axios from "axios";

export async function getProjects() {
  return axios.get("/projects").then((r) => r.data);
}

export async function addProject(data) {
  return axios.post("/projects/create", data).then((r) => r.data);
}
