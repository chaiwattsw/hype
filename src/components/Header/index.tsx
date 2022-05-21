import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useSpotify from "../../hooks/useSpotify";
import { XIcon, MenuIcon, LogoutIcon } from "@heroicons/react/outline";

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { data } = useSpotify("https://api.spotify.com/v1/me");
  const { dispatch } = useAuth();

  const handleToggle = () => setToggle((prevState) => !prevState);

  const handleLogOut = () => {
    dispatch({ type: "LOG_OUT" });
  };

  return (
    <div className="sticky top-0 z-50 bg-purple-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-white text-4xl font-bold [text-shadow:-3px_3px_0_#000]"
          >
            HYPE
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-gray-200 text-lg font-bold">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="recommendations" className="hover:text-white">
            Recommendations
          </Link>
          <Link to="top" className="hover:text-white">
            Top Tracks/Artists
          </Link>

          {data && (
            <>
              {data.images.length > 0 && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={data.external_urls.spotify}
                >
                  <img
                    src={data.images[0].url}
                    alt={data.display_name}
                    className="rounded-full h-14 w-14"
                  />
                </a>
              )}
              <a
                target="_blank"
                rel="noreferrer"
                className="text-gray-200 hover:text-white"
                href={data.external_urls.spotify}
              >
                {data.display_name}
              </a>
              <LogoutIcon
                onClick={handleLogOut}
                className="h-6 w-6 text-gray-200 hover:text-white cursor-pointer"
              />
            </>
          )}
        </nav>
        <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={handleToggle}
          className="rounded md:hidden focus:outline-none"
        >
          {!toggle ? (
            <MenuIcon className="h-6 w-6 text-white" />
          ) : (
            <XIcon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
      {toggle && (
        <nav className="px-8 py-4 flex flex-col space-y-3 md:hidden text-gray-200 text-lg font-bold">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="recommendations" className="hover:text-white">
            Recommendations
          </Link>
          <Link to="top" className="hover:text-white">
            Top Tracks/Artists
          </Link>
          <div className="py-4">
            <div className="w-full border-t border-2 border-gray-300"></div>
          </div>
          <div className="flex items-center gap-4">
            {data && (
              <>
                {data.images.length > 0 && (
                  <a href={data.external_urls.spotify}>
                    <img
                      src={data.images[0].url}
                      alt={data.display_name}
                      className="rounded-full h:10 w-10 md:h-14 md:w-14"
                    />
                  </a>
                )}
                <a
                  className="text-gray-200 hover:text-white"
                  href={data.external_urls.spotify}
                >
                  {data.display_name}
                </a>
                <div className="flex flex-col">Log out</div>
              </>
            )}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
