import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

// allowedRoles optional
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg">
        Checking access...
      </div>
    );
  }

  if (!user) {
    // logged in না থাকলে login page এ পাঠাবে
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // role match না করলে home এ redirect করবে
    return <Navigate to="/" replace />;
  }

  // সব কিছু ঠিক থাকলে child component দেখাবে
  return children;
};

export default ProtectedRoute;
