// src/pages/Login.jsx
import React, { useContext, useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await api.post("/auth/login", { email, password }, { withCredentials: true });

    localStorage.setItem("accessToken", res.data.accessToken);
    setUser(res.data.user);
    navigate("/");
  } catch (err) {
    setMessage(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full mb-4 px-3 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full mb-4 px-3 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
        >
          Login
        </button>

        {message && (
          <p className="text-center text-sm mt-4 text-gray-600">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
