import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Login from "../Login";

const ProtectedRoutes = () => {
  const { state } = useAuth();

  return state?.accessToken ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
