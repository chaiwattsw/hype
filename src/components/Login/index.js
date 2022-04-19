import React from "react";
import { loginURL } from "../../api/spotify";

const Login = () => {
  return (
    <div className="bg-gradient-to-b from-green-500 to-gray-900 flex flex-col justify-center items-center h-screen">
      <div className="w-1/6 text-center mb-12 text-white">
        <h2 className="text-5xl mb-12 font-bold [text-shadow:-2.5px_2.5px_0_#000]">
          Hype
        </h2>
        <p className="font-medium text-md">
          Find your top tracks/artists from Spotify and discover new song from
          your top tracks!
        </p>
      </div>
      <a href={loginURL}>
        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-3xl text-white font-semibold">
          Log in with spotify
        </button>
      </a>
    </div>
  );
};

export default Login;
