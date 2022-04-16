import React, { useState } from "react";
import { useSpotify } from "../../hooks/useSpotify";
import TopItemsContainer from "../TopItemsContainer";
import TopItemsSkeleton from "../TopItemsSkeleton";
import TopTrackItems from "./TopTrackItems";

const TopTracks = () => {
  const [duration, setDuration] = useState("short_term");
  const { data } = useSpotify(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${duration}&limit=10`
  );

  return (
    <TopItemsContainer
      title="Top Tracks"
      duration={duration}
      setDuration={setDuration}
    >
      {data ? <TopTrackItems data={data} /> : <TopItemsSkeleton />}
    </TopItemsContainer>
  );
};

export default TopTracks;
