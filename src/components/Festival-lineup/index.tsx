import React from "react";
import useSpotify from "../../hooks/useSpotify";
import FestivalPoster from "./festival-poster";
import FestivalSkeleton from "./festival-skeleton";

const FestivalLineup: React.FC = () => {
  const { data, isLoading } = useSpotify(
    "https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50"
  );
  const { items: artists } = data || {};

  return (
    <div className="bg-[url('../src/assets/images/festival-lineup/bg.jpg')] bg-no-repeat bg-center bg-cover w-full flex flex-wrap flex-col text-white justify-center items-center text-center">
      {!isLoading ? <FestivalPoster artists={artists} /> : <FestivalSkeleton />}
    </div>
  );
};

export default FestivalLineup;
