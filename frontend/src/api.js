import axios from "axios";

axios.defaults.baseURL = `http://localhost/api`;

export function getUser(id) {
  return axios.get(`/users/${id}`);
}
