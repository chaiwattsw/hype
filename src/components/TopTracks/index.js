import React from "react";
import { useSpotify } from "../../hooks/useSpotify";
import TopItemsSkeleton from "../TopItemsSkeleton";
import TopTrackItems from "./TopTrackItems";
import TopTracksContainer from "./TopTracksContainer";

const TopTracks = ({ duration, limit }) => {
  const { data, error } = useSpotify(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${duration}&limit=${limit}`
  );

  if (error) {
    return (
      <div className="flex justify-center items-center">
        Something went wrong
      </div>
    );
  }

  return (
    <div className="w-full">
      <TopTracksContainer>
        {data ? <TopTrackItems data={data} /> : <TopItemsSkeleton />}
      </TopTracksContainer>
    </div>
  );
};

export default TopTracks;
