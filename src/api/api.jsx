import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; 

// ================= USERS =================
export const getUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users`);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getUser = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/users/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createUser = async (user) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, user);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateUser = async (id, user) => {
  try {
    const res = await axios.put(`${BASE_URL}/users/${id}`, user);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/users/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

// ================= PRODUCTS =================
export const getProducts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createProduct = async (product) => {
  try {
    const res = await axios.post(`${BASE_URL}/products`, product);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const res = await axios.put(`${BASE_URL}/products/${id}`, product);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/products/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
