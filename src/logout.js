import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/use-user-auth";

function Logout() {
    const { userInfo,setUserInfo } = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        navigate("home");
        setUserInfo(localStorage.removeItem("user_Info"))
     
       },[setUserInfo])
  return (
    <div>
      
    </div>
  )
}

export default Logout