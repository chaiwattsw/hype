import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { getCodeFromURL } from "../../api/spotify";

const ProtectedRoutes = () => {
  const { state } = useAuth();
  const location = useLocation();

  console.log(state);

  return state?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
