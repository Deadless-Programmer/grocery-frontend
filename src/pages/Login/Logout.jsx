import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Token remove
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    // Optional: অন্য sensitive data remove
    localStorage.removeItem("user");

    // Redirect
    navigate("/login");
  }, [navigate]);

  return null; // কোনো UI দেখানোর দরকার নেই
};

export default Logout;
