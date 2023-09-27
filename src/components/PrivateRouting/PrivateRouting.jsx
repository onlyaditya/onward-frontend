import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function PrivateRouting({ children }) {
  const [userlogin, SetUserlogin] = useState();

  useEffect(() => {
    SetUserlogin(JSON.parse(localStorage.getItem("user")));
  }, [userlogin]);

  if (!userlogin) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}

export default PrivateRouting;
