import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks/app";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  // Prevent rendering children until navigation logic is resolved
  if (!token) {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
