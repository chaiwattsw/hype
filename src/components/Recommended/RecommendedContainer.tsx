import React, { ReactNode } from "react";

interface RecommendedContainerProps {
  tracks: { id: string; name: string }[];
  children?: ReactNode;
}

const RecommendedContainer: React.FC<RecommendedContainerProps> = ({
  children,
  tracks,
}) => {
  return (
    <div className="w-full flex flex-col my-8 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-white [text-shadow:-3px_3px_0_#000] mb-2">
        Recommendations
      </h1>
      <div className="font-medium text-lg">
        <div className="flex">
          <span className="mr-1">
            Because you listened to{" "}
            {tracks.length > 0 &&
              tracks.map((track, trackIdx) => {
                if (tracks.length - 1 === trackIdx) {
                  return <span key={track.id}>{track.name}</span>;
                }
                return (
                  <span key={track.id} className="mr-1">
                    {track.name},
                  </span>
                );
              })}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default RecommendedContainer;
