import React, { useState } from "react";
import { useSpotify } from "../../hooks/useSpotify";
import TopItemsContainer from "../TopItemsContainer";
import TopItemsSkeleton from "../TopItemsSkeleton";
import TopArtistItems from "./TopArtistItems";

const TopArtists = () => {
  const [duration, setDuration] = useState("short_term");
  const { data } = useSpotify(
    `https://api.spotify.com/v1/me/top/artists?time_range=${duration}&limit=10`
  );

  return (
    <TopItemsContainer
      title="Top Artists"
      duration={duration}
      setDuration={setDuration}
    >
      {data ? <TopArtistItems data={data} /> : <TopItemsSkeleton rounded />}
    </TopItemsContainer>
  );
};

export default TopArtists;
