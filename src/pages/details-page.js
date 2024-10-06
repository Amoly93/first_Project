import React, { useEffect } from "react";
import { useAuth } from "../hooks/use-user-auth";
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("login");
    }
  }, [userInfo]);

  return (
    <div className="flex flex-col items-center">
      {userInfo && (
        <div>
          <h1>Welcome, {userInfo.username}!</h1>
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
