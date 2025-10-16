// src/layouts/DashboardLayout.jsx (example)
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  // Common routes (সব user এর জন্য দেখাবে)
  const commonLinks = [
    { to: "/", label: "Home" },
    { to: "profile", label: "My Profile" },
  ];

  // Admin-specific routes
  const adminLinks = [
    { to: "admin", label: "Admin Dashboard" },
    { to: "userlist", label: "Users List" },
    { to: "reports", label: "Reports" },
  ];

  // Moderator-specific routes
  const moderatorLinks = [
    { to: "moderator", label: "Moderator Dashboard" },
    { to: "eview-list", label: "Review Approvals" },
  ];

  // Normal user routes
  const userLinks = [
    { to: "user", label: "User Dashboard" },
    { to: "bookings", label: "My Bookings" },
  ];

  // Role অনুযায়ী কোন link গুলো দেখাবে
  let roleLinks = [];
  if (user?.role === "admin") roleLinks = adminLinks;
  else if (user?.role === "moderator") roleLinks = moderatorLinks;
  else roleLinks = userLinks;

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4">
        {/* Nested Routes এখানে Render হবে */}
        <Outlet />
      </div>

      <div className="drawer-side bg-gray-800 text-white">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 space-y-2">
          <li className="mb-4">
            <h2 className="text-xl font-semibold">
              Dashboard ({user?.role?.toUpperCase()})
            </h2>
          </li>

          {/* Common Links */}
          {commonLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-gray-300">
                {link.label}
              </Link>
            </li>
          ))}

          <hr className="my-3 border-gray-600" />

          {/* Role-Based Links */}
          {roleLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="hover:text-gray-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
