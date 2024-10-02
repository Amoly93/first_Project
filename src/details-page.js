import React from "react";
import { useAuth } from "./hooks/use-user-auth";

function DetailsPage() {
  const auth = useAuth();
  console.log(auth);

  return <div className="flex flex-col items-center"></div>;
}

export default DetailsPage;
