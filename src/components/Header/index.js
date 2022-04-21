import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useSpotify } from "../../hooks/useSpotify";

function Header() {
  const [toggle, setToggle] = useState(false);
  const { data } = useSpotify("https://api.spotify.com/v1/me");
  const { dispatch } = useAuth();

  const handleLogOut = () => {
    dispatch({ type: "LOG_OUT" });
  };
  return (
    <div className="flex flex-col justify-center sticky top-0 z-50">
      <nav className="flex flex-wrap py-2 text-white text-lg bg-green-500">
        <div className="max-w-7xl px-8 flex items-center mx-auto w-full justify-between">
          <Link
            to="/"
            className="text-4xl font-bold [text-shadow:-3px_3px_0_#000]"
          >
            HYPE
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setToggle(!toggle)}
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div
            className={`${
              toggle ? "block" : "hidden"
            } w-full md:flex md:items-center md:w-auto`}
          >
            <ul className="pt-4 text-gray-200 text-lg font-bold md:flex gap-8 md:justify-between md:pt-0">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="recommendations" className="hover:text-white">
                  Recommendations
                </Link>
              </li>
            </ul>
          </div>
          {data && (
            <div className="hidden md:flex font-bold items-center gap-4">
              <a href={data.external_urls.spotify}>
                <img
                  src={data.images[0].url}
                  alt={data.display_name}
                  className="rounded-full h-14 w-14"
                />
              </a>
              <a
                className="text-gray-200 hover:text-white"
                href={data.external_urls.spotify}
              >
                {data.display_name}
              </a>
              <svg
                onClick={() => handleLogOut()}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer text-gray-200 hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
