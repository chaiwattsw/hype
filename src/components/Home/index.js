import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getUserTopItems } from "../../api/spotify";
import TopTracks from "../TopTracks";

function Home() {
  const {
    state: { accessToken },
  } = useAuth();
  const [topTracks, setTopTracks] = useState([]);
  console.log(topTracks);

  useEffect(() => {
    getUserTopItems("tracks", "long_term", 10, accessToken).then((items) =>
      setTopTracks(items)
    );
  }, []);

  return (
    <div className="w-full flex justify-center items-center text-center text-white flex-col">
      <TopTracks data={topTracks} />

      {/* <section>Your Favorite Artist</section>
      <section>Song you might likes based on your top tracks</section>
      <section>Palette</section>
      <section>Your festival lineup</section>
      <section>generate image</section>
      <section>song player</section> */}
    </div>
  );
}

export default Home;
