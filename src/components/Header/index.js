import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-green-500 border-none flex items-center flex-row justify-between sticky top-0 z-50 w-full p-6 text-white font-bold">
      <h3 className="text-3xl font-bold">HYPE.</h3>
      <div className="flex-row justify-center gap-16 hidden md:flex text-lg">
        <Link to="/">Top Tracks</Link>
        <Link to="recommendations">Recommendations</Link>
        {/* <Link to="/">Palette</Link> */}
      </div>
    </nav>
  );
}

export default Header;
