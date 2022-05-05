import React from "react";
import useRecommendations from "../../hooks/useRecommendations";
import useToptrackIds from "../../hooks/useTopTrackIds";
import RecommendedContainer from "./RecommendedContainer";
import RecommendedItems from "./RecommendedItems";
import RecommendedSkeleton from "./RecommendedSkeleton";

const Recommended = () => {
  const { tracks, id } = useToptrackIds();
  console.log("SPOTIFY TOP TRACKS", tracks, id);
  const { data, isLoading } = useRecommendations(id);

  return (
    <RecommendedContainer tracks={tracks}>
      {!isLoading ? <RecommendedItems items={data} /> : <RecommendedSkeleton />}
    </RecommendedContainer>
  );
};

export default Recommended;
