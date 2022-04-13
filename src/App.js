import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { codeFromURL } from "./api/spotify";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Recommended from "./components/Recommended";
import { useAuth } from "./hooks/useAuth";
import axios from "axios";

function App() {
  const { dispatch } = useAuth();
  const code = codeFromURL;

  useEffect(() => {
    if (typeof code === "string") {
      axios
        .post("http://localhost:3001/login", { code })
        .then((res) => {
          dispatch({ type: "LOG_IN", payload: res.data });
          window.history.pushState({}, null, "/");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [code]);

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="recommended" element={<Recommended />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
