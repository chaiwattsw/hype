import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex sticky top-0 z-50 flex-wrap w-full text-white py-4 px-4 text-lg bg-green-500">
      <div className="max-w-6xl flex flex-row items-center mx-auto w-full justify-between">
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
      </div>
    </nav>
  );
}

export default Header;
