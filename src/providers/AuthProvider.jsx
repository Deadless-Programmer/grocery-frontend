import React, { createContext, useState, useEffect } from "react";
import api from "../api/api";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Backend থেকে user info আনবে
  const fetchUser = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await api.get("/auth/me");
      console.log("🟢 API Response:", res.data);
      setUser(res.data.user);
    } catch (err) {
      console.log("User fetch error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser, loading}}>
      {/* 🔹 loading true থাকলে পুরো app render না করাই ভালো */}
      {loading ? (
        <div className="flex items-center justify-center h-screen text-lg">
          Checking access...
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
