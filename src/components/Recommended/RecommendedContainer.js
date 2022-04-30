import React from "react";

const RecommendedContainer = ({ children, tracks }) => {
  return (
    <div className="w-full flex flex-col my-8 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-white [text-shadow:-3px_3px_0_#000] mb-2">
        Recommendations
      </h1>
      <div className="flex flex-row items-center font-medium text-lg">
        <span className="mr-1">Because you listened to</span>
        {tracks.length > 0 ? (
          tracks.map((track, trackIdx) => {
            if (tracks.length - 1 === trackIdx) {
              return <span key={track.id}>{track.name}</span>;
            }
            return (
              <span key={track.id} className="mr-1">
                {track.name},
              </span>
            );
          })
        ) : (
          <div className="animate-pulse w-3/4 h-4 rounded-2xl bg-slate-200 ml-1"></div>
        )}
      </div>
      {children}
    </div>
  );
};

export default RecommendedContainer;
