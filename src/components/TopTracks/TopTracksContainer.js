import React from "react";

const TopTracksContainer = ({ children }) => {
  return (
    <>
      <div className="flex gap-6 my-8">
        <h1 className="text-5xl font-bold text-white text-left">Top Tracks</h1>
        <div className="flex items-end">
          <button className="leading-none bg-green-500 hover:bg-green-600 rounded-2xl text-white px-8 py-2">
            Share
          </button>
        </div>
      </div>
      {children}
    </>
  );
};

export default TopTracksContainer;
