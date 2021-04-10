import axios from "axios";

export async function addExpense(projectId, data) {
  return axios.post(`projects/${projectId}/addExpense`, data);
}

export async function deleteExpense(projectId, id, name, cost) {
  return axios.post(`/projects/${projectId}/deleteExpense`, {
    id: id,
    name: name,
    cost: cost,
  });
}

export async function addProject(data) {
  return axios.post(`projects/create`, data);
}

export async function getProjects() {
  return axios.get("/projects");
}

export async function getProject(id) {
  return axios.get(`/projects/${id}`);
}

export async function deleteProject(id) {
  return axios.post(`/projects/${id}/delete`);
}

export async function setBudget(projectId, value) {
  return axios.post(`/projects/${projectId}/setBudget`, { budget: value });
}

export async function login(email, password) {
  return axios.post(
    "auth/login",
    { email: email, password: password },
    { headers: { Authorization: null } }
  );
}

export function registerUser(firstName, lastName, email, password) {
  return axios.post(
    "/owners/register",
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
    { headers: { Authorization: null } }
  );
}
