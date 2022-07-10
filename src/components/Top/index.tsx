import { Suspense } from "react";
import TopTracks from "../TopTracks";
import TopArtists from "../TopArtists";
import TopItemsSkeleton from "components/TopItemsSkeleton";

const Top = () => {
  return (
    <div className="w-full flex justify-center items-center text-center text-white flex-col">
      <Suspense fallback={<TopItemsSkeleton />}>
        <TopTracks />
      </Suspense>
      <Suspense fallback={<TopItemsSkeleton />}>
        <TopArtists />
      </Suspense>
    </div>
  );
};

export default Top;
