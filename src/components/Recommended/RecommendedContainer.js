import React from "react";

const RecommendedContainer = ({ children }) => {
  return (
    <div className="w-full px-4 my-8 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-white [text-shadow:-2.5px_2.5px_0_#000]">
        Recommendations
      </h1>
      <p className="font-medium text-lg">Based on your 5 top tracks</p>
      {children}
    </div>
  );
};

export default RecommendedContainer;
