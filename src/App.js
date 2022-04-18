import { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Recommended from "./components/Recommended";
import { useAuth } from "./hooks/useAuth";
import axios from "axios";

function App() {
  const { state, dispatch } = useAuth();
  const { refreshToken } = state;
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (typeof code === "string") {
      axios
        .post("http://localhost:3001/login", { code })
        .then((res) => {
          dispatch({ type: "LOG_IN", payload: res.data });
          searchParams.delete("code");
          setSearchParams(searchParams);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  useEffect(() => {
    if (!state.refreshToken || !state.expiresIn) return;
    const countDown = 3600 * 60 - 60; // 1 hour - 60 ms
    let interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", { refreshToken })
        .then((res) => {
          dispatch({ type: "REFRESH", payload: res.data });
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }, countDown);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.accessToken]);

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="recommended" element={<Recommended />} />
          <Route path="share" />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
