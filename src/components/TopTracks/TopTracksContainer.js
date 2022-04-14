import React from "react";

const TopTracksContainer = ({ duration, setDuration, children }) => {
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
    <div className="w-full px-4 flex flex-col gap-6 my-8">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold text-white text-left">Top Tracks</h1>
        <div className="flex gap-4">
          <button
            className={`${
              duration === "short_term" ? "text-green-500" : ""
            } hover:text-green-500 font-medium`}
            onClick={shortTerm}
          >
            4 WEEKS
          </button>
          <button
            className={`${
              duration === "medium_term" ? "text-green-500" : ""
            } hover:text-green-500 font-medium`}
            onClick={mediumTerm}
          >
            6 MONTHS
          </button>
          <button
            className={`${
              duration === "long_term" ? "text-green-500" : ""
            } hover:text-green-500 font-medium`}
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

export default TopTracksContainer;