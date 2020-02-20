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

export function createMatch() {
  return axios.post("/matches/new");
}

export function getDates(id) {
  return axios.get(`/matches/dates/${id}`);
}

export function getMatches(id) {
  return axios.get(`/matches/${id}`);
}
