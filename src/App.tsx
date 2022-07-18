import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useSearchParams, Navigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./hooks/useAuth";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import RecommendedSkeleton from "components/Recommended/RecommendedSkeleton";
import FestivalSkeleton from "components/Festival-lineup/festival-skeleton";
import Loader from "components/Loader";
import Cookies from "js-cookie";
import ErrorFallback from "components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

const Top = lazy(() => import("./components/Top"));
const Recommended = lazy(() => import("./components/Recommended"));
const FestivalLineup = lazy(() => import("./components/Festival-lineup"));

function App() {
  const { dispatch } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const callbackURL = process.env.REACT_APP_CALLBACK as string;

  useEffect(() => {
    async function handleLogin() {
      if (searchParams.has("code") && searchParams.has("state")) {
        const code = searchParams.get("code");
        const stateParam = searchParams.get("state");
        await axios.post(callbackURL, {
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
        // Cookies.set("spotify_auth_state", token.accessToken ?? "", {
        //   path: "",
        // });
        dispatch({ type: "LOG_IN", payload: token });
        setSearchParams({});
      }
    }
    handleLogin();
  }, [dispatch, searchParams, setSearchParams, callbackURL]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route path="/top" element={<Top />} />
              <Route
                path="recommendations"
                element={
                  <Suspense fallback={<RecommendedSkeleton />}>
                    <Recommended />
                  </Suspense>
                }
              />
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
    </ErrorBoundary>
  );
}

export default App;
