import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

function Home() {
  // const {
  //   state: { accessToken },
  // } = useAuth();
  // const getUserTopTracks = () => {
  //   axios
  //     .get("https://api.spotify.com/v1/me/top/tracks?time_range=long_term", {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: "Bearer " + accessToken,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((res) => console.log(res));
  // };
  // useEffect(() => {
  //   getUserTopTracks();
  // }, []);

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
