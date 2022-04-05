import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Login from "../Login";

const ProtectedRoutes = () => {
  const { state } = useAuth();
  const location = useLocation();

  console.log(state);

  return state?.accessToken ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
