import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center w-full bg-purple-600 font-bold text-white h-12 flex justify-center items-center">
      <p>
        Made by{" "}
        <a className="hover:underline" href="https://github.com/chaiwattsw">
          chaiwattsw
        </a>
      </p>
    </footer>
  );
};

export default Footer;
