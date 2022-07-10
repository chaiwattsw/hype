import { Outlet } from "react-router-dom";
import { useAuth } from "hooks";
import Login from "../Login";

const ProtectedRoute = () => {
  const { state } = useAuth();

  if (!state?.accessToken) {
    return <Login />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
