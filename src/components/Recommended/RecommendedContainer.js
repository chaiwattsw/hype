import React from "react";

const RecommendedContainer = ({ children }) => {
  return (
    <div className="w-full px-4 my-8 text-white">
      <h1 className="text-4xl font-bold text-white">Recommendations</h1>
      <p className="font-medium text-lg">Based on your 5 top tracks</p>
      {children}
    </div>
  );
};

export default RecommendedContainer;
