import React from "react";

function Header() {
  return (
    <nav className="bg-green-500 sticky flex items-center flex-row justify-between w-full p-6 text-white font-bold">
      <h3 className="text-3xl font-bold">Hype.</h3>
      <div className="flex-row justify-center gap-16 hidden md:flex">
        <a href="/">Top Tracks</a>
        <a href="/">Top Artists</a>
        <a href="/">Discover</a>
        <a href="/">Palette</a>
      </div>
    </nav>
  );
}

export default Header;
