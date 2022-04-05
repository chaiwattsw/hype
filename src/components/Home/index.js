import React from "react";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";

function Home() {
  const getUserTopTracks = () => {
    const topTracks = axios.get("https://api.spotify.com/v1/me/top/tracks", {
      params: { time_range: "long_terms" },
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + "token",
        "Content-Type": "application/json",
      },
    });
    console.log(topTracks);
  };
  return (
    <div className="flex justify-center items-center text-cente text-white flex-col">
      <section>Your Favorite Song</section>
      <section>Your Facvorite Artist</section>
      <section>Song you might likes based on your top tracks</section>
      <section>Palette</section>
      <section>Your festival lineup</section>
      <section>generate image</section>
      <section>song player</section>
    </div>
  );
}

export default Home;
