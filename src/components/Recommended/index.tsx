import { Toaster } from "react-hot-toast";
import { useAuth, useRecommendation } from "hooks";
import Seeds from "./Seeds";
import RecommendedList from "./RecommendedList";

const Recommended = () => {
  const { state } = useAuth();
  const { data: recommendation, isError } = useRecommendation(
    state.accessToken
  );

  if (isError) {
    return (
      <div className="text-center flex items-center justify-center flex-col min-h-screen">
        <p className="text-9xl">😥</p>
        <div className="mt-12">
          <p className="text-4xl font-bold text-white">Sorry!</p>
          <p className="text-xl font-bold text-white mt-4">
            This feature only available for whitelisted user
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Toaster />
      <Seeds tracks={recommendation.seeds} />
      {recommendation?.tracks && (
        <RecommendedList tracks={recommendation.tracks} />
      )}
    </div>
  );
};

export default Recommended;
