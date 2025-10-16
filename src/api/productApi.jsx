
import api from "./api";

export const getProducts = async () => {
  try {
    
    const res = await api.get(`/products`);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createProduct = async (product) => {
  try {
    const res = await api.post(`/products`, product);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const res = await api.put(`/products/${id}`, product);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
