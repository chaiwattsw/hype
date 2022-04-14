import React, { useState } from "react";
import { useSpotify } from "../../hooks/useSpotify";
import TopItemsSkeleton from "../TopItemsSkeleton";
import TopTrackItems from "./TopTrackItems";
import TopTracksContainer from "./TopTracksContainer";

const TopTracks = () => {
  const [duration, setDuration] = useState("short_term");
  const { data } = useSpotify(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${duration}&limit=10`
  );

  return (
    <TopTracksContainer duration={duration} setDuration={setDuration}>
      {data ? <TopTrackItems data={data} /> : <TopItemsSkeleton />}
    </TopTracksContainer>
  );
};

export default TopTracks;
