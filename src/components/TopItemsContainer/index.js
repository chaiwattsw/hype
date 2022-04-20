import React from "react";

const TopItemsContainer = ({ title, duration, setDuration, children }) => {
  console.log("render");
  const shortTerm = () => {
    setDuration("short_term");
  };
  const mediumTerm = () => {
    setDuration("medium_term");
  };
  const longTerm = () => {
    setDuration("long_term");
  };

  return (
    <div className="w-full px-4 md:px-0 flex flex-col gap-6 my-8">
      <div className="flex justify-between items-end">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-left [text-shadow:-3px_3px_0_#000]">
          {title}
        </h1>

        <div className="flex gap-4">
          <button
            className={`${
              duration === "short_term" ? "text-white border-b-4" : ""
            } hover:text-white text-gray-200 font-bold`}
            onClick={shortTerm}
          >
            4 WEEKS
          </button>
          <button
            className={`${
              duration === "medium_term" ? "text-white border-b-4" : ""
            } hover:text-white text-gray-200 font-bold`}
            onClick={mediumTerm}
          >
            6 MONTHS
          </button>
          <button
            className={`${
              duration === "long_term" ? "text-white border-b-4" : ""
            } hover:text-white text-gray-200 font-bold`}
            onClick={longTerm}
          >
            ALL TIME
          </button>
        </div>
      </div>

      {children}
    </div>
  );
};

export default TopItemsContainer;
