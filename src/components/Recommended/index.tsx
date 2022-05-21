import React from "react";
import useRecommendations from "hooks/useRecommendations";
import useToptrackIds from "hooks/useTopTrackIds";
import RecommendedContainer from "./RecommendedContainer";
import RecommendedItems from "./RecommendedItems";
import RecommendedSkeleton from "./RecommendedSkeleton";

const Recommended: React.FC = () => {
  const { tracks: topTracks, id } = useToptrackIds();
  const { data, isLoading } = useRecommendations(id);

  // const {items:tracks} = data || {};

  return (
    <RecommendedContainer tracks={topTracks}>
      {!isLoading ? (
        <RecommendedItems tracks={data} />
      ) : (
        <RecommendedSkeleton />
      )}
    </RecommendedContainer>
  );
};

export default Recommended;
