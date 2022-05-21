import React, { useState } from "react";
import useSpotify from "../../hooks/useSpotify";
import TopItemsContainer from "../TopItemsContainer";
import TopItemsSkeleton from "../TopItemsSkeleton";
import TopTrackItems from "./TopTrackItems";

const TopTracks = () => {
  const [duration, setDuration] = useState<string>("short_term");
  const { data, isLoading } = useSpotify(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${duration}&limit=10`
  );
  const { items: tracks } = data || {};

  return (
    <TopItemsContainer
      title="Top Tracks"
      duration={duration}
      setDuration={setDuration}
    >
      {!isLoading ? (
        <TopTrackItems tracks={tracks} duration={duration} />
      ) : (
        <TopItemsSkeleton />
      )}
    </TopItemsContainer>
  );
};

export default TopTracks;
