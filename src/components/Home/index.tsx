import React from "react";
import TopTracks from "../TopTracks";
import TopArtists from "../TopArtists";

const Home: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center text-center text-white flex-col">
      <TopTracks />
      <TopArtists />
    </div>
  );
};

export default Home;
