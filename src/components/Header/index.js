import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between w-full text-white py-4 md:py-0 px-4 text-lg bg-green-500">
      <div>
        <Link
          to="/"
          className="text-3xl font-bold [text-shadow:-2.5px_2.5px_0_#000]"
        >
          HYPE.
        </Link>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setToggle(!toggle)}
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className={`${
          toggle ? "block" : "hidden"
        } w-full md:flex md:items-center md:w-auto`}
      >
        <ul className="pt-4 text-white text-lg font-semibold md:flex md:justify-between md:pt-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="recommendations">Recommendations</Link>
          </li>
        </ul>
      </div>
    </nav>
    // <nav className="bg-green-500 border-none flex items-center flex-row justify-between sticky top-0 z-50 w-full p-6 text-white font-bold">
    //   <Link
    //     to="/"
    //     className="text-3xl font-bold [text-shadow:-2.5px_2.5px_0_#000]"
    //   >
    //     HYPE.
    //   </Link>
    //   <div className="flex-row justify-center gap-16 hidden md:flex text-lg">
    //     <Link to="/">Home</Link>
    //     <Link to="recommendations">Recommendations</Link>
    //   </div>
    //   <svg
    //     xmlns="<http://www.w3.org/2000/svg>"
    //     className="h-6 w-6 cursor-pointer md:hidden block"
    //     onClick={() => setToggle(!toggle)}
    //     fill="none"
    //     viewBox="0 0 24 24"
    //     stroke="currentColor"
    //   >
    //     <path
    //       stroke-linecap="round"
    //       stroke-linejoin="round"
    //       stroke-width="2"
    //       d="M4 6h16M4 12h16M4 18h16"
    //     />
    //   </svg>
    //   <div
    //     className={`${
    //       toggle ? "block" : "hidden"
    //     } w-full md:flex md:items-center md:w-auto`}
    //   >
    //     <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
    //       <li>
    //         <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
    //           Features
    //         </a>
    //       </li>
    //       <li>
    //         <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
    //           Pricing
    //         </a>
    //       </li>
    //       <li>
    //         <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
    //           Customers
    //         </a>
    //       </li>
    //       <li>
    //         <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
    //           Blog
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
    //           href="#"
    //         >
    //           Sign Up
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Header;
