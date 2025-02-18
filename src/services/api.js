import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

const api = axios.create({
  baseURL: API_URL,
});

// Function to get the Auth Token from local storage
const getAuthToken = () => localStorage.getItem("access_token");

export const registerUser = (userData) => api.post("register/", userData);

export const loginUser = async (userData) => {
  const response = await api.post("login/", userData);
  localStorage.setItem("access_token", response.data.access);
  return response.data;
};

export const getProducts = () =>
  api.get("products/", {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

export const addProduct = (productData) =>
  api.post("products/", productData, {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

export const getActivityLogs = () =>
  api.get("activity-logs/", {
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  });

export const logoutUser = () => {
  localStorage.removeItem("access_token");
};
