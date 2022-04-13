import React from "react";
import { loginURL } from "../../api/spotify";

const Login = () => {
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
