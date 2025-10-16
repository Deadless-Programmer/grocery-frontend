import api from "./api";



export const getUsers = async () => {
  try {
    const res = await api.get(`/users`);
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getUser = async (id) => {
  try {
    const res = await api.get(`/users/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createUser = async (user) => {
  try {
    const res = await api.post(`/users`, user);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateUser = async (id, user) => {
  try {
    const res = await api.put(`/users/${id}`, user);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};


// 🔥 user role update (admin only)
export const updateUserRole = async (id, role) => {
  try {
    const res = await api.put(`/users/${id}/role`, { role });
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};