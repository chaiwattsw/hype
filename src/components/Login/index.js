import React from "react";
import { loginURL } from "../../api/spotify";

function Login() {
  return (
    <div>
      <h2 className="text-3xl font-bold">Welcome to Hype</h2>
      <a href={loginURL}>
        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-3xl text-white font-semibold mt-6">
          Log in with spotify
        </button>
      </a>
    </div>
  );
}

export default Login;
