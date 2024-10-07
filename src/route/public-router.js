import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/use-user-auth";

export const PublicRoute = ({ children }) => {
    const { userInfo } = useAuth();
  
    if (userInfo) {
      return <Navigate to="/home" />;
    }
    return children;
  };