import React from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getCodeFromURL } from "../../api/spotify";
import Login from "../Login";

const ProtectedRoutes = () => {
  const auth = useAuth(getCodeFromURL);
  console.log(auth);
  return auth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
