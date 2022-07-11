import { Toaster } from "react-hot-toast";
import { useRecommendation } from "hooks";
import Seeds from "./Seeds";
import RecommendedList from "./RecommendedList";

const Recommended = () => {
  const { data: recommendation } = useRecommendation();

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
