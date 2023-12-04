import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";

// Used to access public routes or token refresh
export default axios.create({
  baseURL: BASE_URL,
});

// Used to access pritvate routes
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
