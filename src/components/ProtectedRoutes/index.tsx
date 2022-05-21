import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";
import Login from "../Login";

const ProtectedRoutes: React.FC = () => {
  const { state } = useAuth();

  if (!state?.accessToken) {
    return <Login />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
