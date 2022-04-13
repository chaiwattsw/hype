import React, { useEffect } from "react";
import { loginURL, codeFromURL } from "../../api/spotify";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const Login = () => {
  const { dispatch } = useAuth();
  const code = codeFromURL;

  console.log(code);

  useEffect(() => {
    if (code) {
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
    <div className="bg-black flex flex-col justify-center items-center h-screen">
      <h2 className="text-3xl font-bold text-white">Welcome to Hype</h2>
      <a href={loginURL}>
        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-3xl text-white font-semibold mt-6">
          Log in with spotify
        </button>
      </a>
    </div>
  );
};

export default Login;
