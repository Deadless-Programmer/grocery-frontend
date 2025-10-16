// src/routes/router.jsx
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import App from "../App";
import Products from "../pages/Products/Products";
import CreateUser from "../pages/CreateUser/CreateUser";
import UserList from "../pages/Users/UserList";
import ProductCreate from "../pages/Products/ProductCreate/ProductCreate";
import Login from "../pages/Login/Login";

import DashBoard from "../layout/Main/DashBoard";
import Admin from "../pages/dashboard/admin";
import Dashboard from "../pages/dashboard/dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import User from "../pages/dashboard/user";
import Moderator from "../pages/dashboard/Moderator";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <App /> },
      { path: "/products", element: <Products /> },
      { path: "/Product-Create", element: <ProductCreate /> },
      { path: "/create-user", element: <CreateUser /> },
      // { path: "/users", element: <UserList /> },
      { path: "/login", element: <Login /> },
    ],
  },

  {
  path: "/dashboard",
  element: (
    <ProtectedRoute allowedRoles={["admin", "moderator", "user"]}>
      <DashBoard />
    </ProtectedRoute>
  ),
  children: [
    {
      index: true,
      element: (
        <ProtectedRoute allowedRoles={["admin", "moderator", "user"]}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "admin", // ✅ শুধু relative অংশ
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <Admin />
        </ProtectedRoute>
      ),
    },
    {
      path: "userlist", // ✅ শুধু relative অংশ
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <UserList/>
        </ProtectedRoute>
      ),
    },
    {
      path: "moderator", // ✅ শুধু relative অংশ
      element: (
        <ProtectedRoute allowedRoles={["moderator"]}>
         <Moderator/>
        </ProtectedRoute>
      ),
    },
    {
      path: "user", // ✅ relative অংশ
      element: (
        <ProtectedRoute allowedRoles={["user"]}>
          <User />
        </ProtectedRoute>
      ),
    },
  ],
},

]);
