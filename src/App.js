import { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./hooks/useAuth";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Recommended from "./components/Recommended";

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
    const expires_time = 3600 * 1000; // 1 hour
    let interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", { refreshToken })
        .then((res) => {
          dispatch({ type: "REFRESH", payload: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
    }, expires_time);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.accessToken]);

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="recommendations" element={<Recommended />} />
          <Route path="share" />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
