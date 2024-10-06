
import React from 'react';
import {  useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-user-auth";



const ProtectedRoute = ({ nav }) => {
    const { userInfo } = useAuth();
    const navigate = useNavigate();
    return userInfo ? nav :  navigate("/login");
  };

export default ProtectedRoute;

