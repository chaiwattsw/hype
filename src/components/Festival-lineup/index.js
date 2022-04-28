import React from "react";
import { useSpotify } from "../../hooks/useSpotify";
import FestivalPoster from "./festival-poster";
import FestivalSkeleton from "./festival-skeleton";

const FestivalLineup = () => {
  const getArtists = {
    method: "get",
    url: `https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50`,
  };
  const { data, isLoading } = useSpotify(getArtists);

  return (
    <div className="relative w-full flex flex-wrap flex-col my-8 text-white justify-center items-center text-center">
      {!isLoading ? <FestivalPoster data={data} /> : <FestivalSkeleton />}
    </div>
  );
};

export default FestivalLineup;
