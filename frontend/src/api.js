import axios from "axios";

axios.defaults.baseURL = `/api`;

export function login(email, password) {
  return axios.post(`/session/login`, { email, password });
}

export function getUser(id) {
  return axios.get(`/users/${id}`);
}

export function getRandomUser() {
  return axios.get("/users/random");
}

export function getRandomUserFiltered(userFilteredFor) {
  return axios.get(`/users/random/${userFilteredFor.id}`);
}

export function getCandidates() {
  return axios.get("/users/shuffle");
}

export function getCandidatesFiltered(userFilteredFor) {
  return axios.get(`/users/shuffle/${userFilteredFor.id}`);
}

export function createMatch(matchmakerId, user1Id, user2Id) {
  return axios.post("/matches/new", { matchmakerId, user1Id, user2Id });
}

export function deleteMatch(matchId) {
  return axios.post(`matches/dates/remove/${matchId}`);
}

export function getDates(id) {
  return axios.get(`/matches/dates/${id}`);
}

export function getMatches(id) {
  return axios.get(`/matches/${id}`);
}

export function getGenderPreference(user) {
  return axios.get(`./users/${user.id}/preference`);
}
