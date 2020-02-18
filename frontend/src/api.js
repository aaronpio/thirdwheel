import axios from "axios";

axios.defaults.baseURL = `/api`;

export function getUser(id) {
  return axios.get(`/users/${id}`);
}

export function getRandomUser() {
  return axios.get("/users/random");
}

export function getCandidates() {
  return axios.get("/users/shuffle");
}
