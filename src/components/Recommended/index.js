import React from "react";
import { useSpotify } from "../../hooks/useSpotify";
import RecommendedContainer from "./RecommendedContainer";
import RecommendedItems from "./RecommendedItems";
import RecommendedSkeleton from "./RecommendedSkeleton";

const Recommended = () => {
  const getTopTracks = useSpotify({
    method: "get",
    url: "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5",
  });
  const topTrackIDs = getTopTracks?.data?.items?.map((item) => [item.id]);
  const topTrackIDsParam = topTrackIDs?.join("%2C");

  const { data } = useSpotify({
    method: "get",
    url: `https://api.spotify.com/v1/recommendations?limit=20&seed_tracks=${topTrackIDsParam}`,
  });

  return (
    <RecommendedContainer>
      {data ? <RecommendedItems items={data} /> : <RecommendedSkeleton />}
    </RecommendedContainer>
  );
};

export default Recommended;
