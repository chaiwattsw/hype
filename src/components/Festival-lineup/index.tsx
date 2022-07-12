import { useAuth, useTopArtists } from "hooks";
import FestivalPoster from "./festival-poster";
import FestivalSkeleton from "./festival-skeleton";

const FestivalLineup = () => {
  const { state } = useAuth();
  const { data: artists, isLoading } = useTopArtists(
    "long_term",
    "50",
    state.accessToken
  );

  return (
    <div className="w-full flex flex-wrap flex-col text-white justify-center items-center text-center">
      {!isLoading && artists ? (
        <FestivalPoster artists={artists} />
      ) : (
        <FestivalSkeleton />
      )}
    </div>
  );
};

export default FestivalLineup;
