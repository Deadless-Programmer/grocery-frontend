import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Request interceptor → প্রতিবার request এর আগে token attach করে
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response interceptor → token expire হলে refresh করে
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");

      const { data } = await axios.post("http://localhost:5000/api/auth/refresh", {
        token: refreshToken,
      });

      localStorage.setItem("accessToken", data.accessToken);

      originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
      return api(originalRequest); // আবার একই request পাঠাও
    }
    return Promise.reject(err);
  }
);

export default api;
