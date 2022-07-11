import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useSearchParams, Navigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./hooks/useAuth";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import RecommendedSkeleton from "components/Recommended/RecommendedSkeleton";
import FestivalSkeleton from "components/Festival-lineup/festival-skeleton";

const Top = lazy(() => import("./components/Top"));
const Recommended = lazy(() => import("./components/Recommended"));
const FestivalLineup = lazy(() => import("./components/Festival-lineup"));

function App() {
  const { state, dispatch } = useAuth();
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
      window.localStorage.setItem("hype_client_token", token.accessToken ?? "");
      setSearchParams({});
    }
  }, [dispatch, searchParams, setSearchParams]);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/top" element={<Top />} />
            <Route path="recommendations" element={<RecommendedSkeleton />} />
            <Route
              path="/"
              element={
                <Suspense fallback={<FestivalSkeleton />}>
                  <FestivalLineup />
                </Suspense>
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
