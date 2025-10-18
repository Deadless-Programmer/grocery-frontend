import React, { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import api from "../api/api";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, setUser } = useContext(AuthContext);
  console.log("👤 Current User:", user);




 const handleLogout = async () => {
  localStorage.removeItem("accessToken");

  try {
    await api.post("/auth/logout", {}, { withCredentials: true }); // clears cookie
  } catch (err) {
    console.log("Logout error:", err);
  }

  setUser(null);
};

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold">
            Glossary
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/products" className="hover:text-gray-200">
              Products
            </Link>
            <Link to="/Product-Create" className="hover:text-gray-200">
              Product-Create
            </Link>
            <Link to="/create-user" className="hover:text-gray-200">
              Sign Up
            </Link>
            {/* <Link to="/users" className="hover:text-gray-200">
              Users
            </Link> */}

            {user ? (
              <>
                <span>
                  👋 {user.name}
                </span>
                <Link to="/dashboard">Dashboard</Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/Product-Create"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Product-Create
          </Link>
          <Link
            to="/create-user"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
          {/* <Link
            to="/users"
            className="block hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Users
          </Link> */}
          {user ? (
            <>
              <span>
                👋 {user.email} ({user.role})
              </span>
              <Link to="/dashboard">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
