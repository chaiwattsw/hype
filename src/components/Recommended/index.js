import React from "react";
import { useSpotify } from "../../hooks/useSpotify";

const Recommended = () => {
  //   const { data, error } = useSpotify(``);

  //   if (error) {
  //     return <div>Something went wrong</div>;
  //   }
  //   if (!data) {
  //     return <div>loading...</div>;
  //   }

  return (
    <div className="text-white">
      <h1>Recommended Songs</h1>
      <p>Based on your top tracks, artists, genre</p>
    </div>
  );
};

export default Recommended;
