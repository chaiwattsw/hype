import { loginURL } from "../../constants";

const Login = () => {
  return (
    <div className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 flex flex-col justify-center items-center h-screen">
      <div className="max-w-sm text-center mb-12 text-white">
        <h2 className="text-8xl mb-12 font-bold [text-shadow:-5px_5px_0_#000]">
          HYPE
        </h2>
        <p className="font-medium text-md">
          Find your top tracks/artists from Spotify and discover new song from
          your top tracks!
        </p>
      </div>
      <a href={process.env.REACT_APP_LOGIN_URL || loginURL}>
        <button className=" bg-green-600 hover:bg-green-700 px-4 py-2 rounded-3xl text-white font-semibold">
          Log in with spotify
        </button>
      </a>
    </div>
  );
};

export default Login;
