import React from "react";

const RecommendedContainer = ({ children }) => {
  return (
    <div className="w-full px-4 my-8 text-white">
      <h1 className="text-5xl font-bold text-white">Recommended Songs</h1>
      <p>Based on your 5 top tracks</p>
      {children}
    </div>
  );
};

export default RecommendedContainer;
