import { lazy, Suspense } from "react";
import TopItemsSkeleton from "components/TopItemsSkeleton";

const TopTracks = lazy(() => import("../TopTracks"));
const TopArtists = lazy(() => import("../TopArtists"));

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
