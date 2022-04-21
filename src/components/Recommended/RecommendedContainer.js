import React from "react";

const RecommendedContainer = ({ children }) => {
  return (
    <div className="w-full my-8 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-white [text-shadow:-3px_3px_0_#000] mb-2">
        Recommendations
      </h1>
      <p className="font-medium text-lg">Based on your 5 top tracks</p>
      {children}
    </div>
  );
};

export default RecommendedContainer;
