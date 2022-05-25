import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Login from "../Login";

const ProtectedRoute: React.FC = () => {
  const { state } = useAuth();

  if (!state?.accessToken) {
    return <Login />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
