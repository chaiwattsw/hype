import React from "react";

const RecommendedContainer = ({ children, tracks }) => {
  return (
    <div className="w-full flex flex-col my-8 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-white [text-shadow:-3px_3px_0_#000] mb-2">
        Recommendations
      </h1>
      <div>
        <p className="font-medium text-lg">
          Because you listened to{" "}
          {tracks?.map((track) => (
            <span>{track.name}, </span>
          ))}
        </p>
      </div>
      {children}
    </div>
  );
};

export default RecommendedContainer;
