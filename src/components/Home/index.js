import TopTracks from "../TopTracks";
import TopArtists from "../TopArtists";

function Home() {
  return (
    <div className="w-full flex justify-center items-center text-center text-white flex-col">
      <TopTracks />
      <TopArtists />

      {/* FEATURE
SONG RECOMMENDATION */}

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
