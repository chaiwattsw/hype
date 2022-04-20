import TopTracks from "../TopTracks";
import TopArtists from "../TopArtists";

function Home() {
  return (
    <div className="w-full flex justify-center items-center text-center text-white flex-col">
      <TopTracks />
      <TopArtists />
    </div>
  );
}

export default Home;
