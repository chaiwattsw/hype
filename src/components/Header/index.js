import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-green-500 border-none flex items-center flex-row justify-between sticky top-0 z-50 w-full p-6 text-white font-bold">
      <Link
        to="/"
        className="text-3xl font-bold [text-shadow:-2.5px_2.5px_0_#000]"
      >
        HYPE.
      </Link>
      <div className="flex-row justify-center gap-16 hidden md:flex text-lg">
        <Link to="/">Home</Link>
        <Link to="recommendations">Recommendations</Link>
      </div>
    </nav>
  );
}

export default Header;
