import React, { useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import axios from "axios";
import useAuth from "./hooks/useAuth";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Recommended from "./components/Recommended";
import FestivalLineup from "./components/Festival-lineup";

function App() {
  const { state, dispatch } = useAuth();
  const { refreshToken, expiresIn } = state || {};
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has("code") && searchParams.has("state")) {
      const code = searchParams.get("code");
      const stateParam = searchParams.get("state");
      axios.post("http://localhost:8888/callback", {
        code: code,
        stateParam,
      });
    }
    if (searchParams.has("access_token")) {
      const token = {
        accessToken: searchParams.get("access_token"),
        refreshToken: searchParams.get("refresh_token"),
        expiresIn: searchParams.get("expires_in"),
      };
      dispatch({ type: "LOG_IN", payload: token });
      setSearchParams({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (!state.refreshToken || !state.expiresIn) return;
  //   const expires_time = 3600 * 1000; // 1 hour
  //   let interval = setInterval(() => {
  //     axios
  //       .post("http://localhost:8888/refresh_token", { refreshToken })
  //       .then((res) => {
  //         dispatch({ type: "REFRESH", payload: res.data });
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }, expires_time);
  //   return () => clearInterval(interval);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [state.accessToken]);

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Layout />}>
          <Route path="/top" element={<Home />} />
          <Route path="recommendations" element={<Recommended />} />
          <Route path="/" element={<FestivalLineup />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default App;
