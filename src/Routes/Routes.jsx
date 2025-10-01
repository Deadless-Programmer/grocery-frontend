import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import App from "../App";
import Products from "../pages/Products/Products";
import CreateUser from "../pages/CreateUser/CreateUser";

import UserList from "../pages/Users/UserList";
import ProductCreate from "../pages/Products/ProductCreate/ProductCreate";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement:<DashboardErr/>,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/Product-Create",
        element: <ProductCreate/>
      },
      {
        path: "/create-user",
        element: <CreateUser/>
      },
      {
        path: "/users",
        element: <UserList/>
      },
      
    ],
  },
]);