import { useQuery } from "react-query";
import fetcher from "utils/fetcher";
import { Recommendation } from "types";

const useRecommendation = () => {
  const topTracksconfig = { method: "get", url: "/me/top/tracks?limit=5" };
  const { data: topTracks } = useQuery(["5-top-track", topTracksconfig], () =>
    fetcher(topTracksconfig)
  );
  const topTracksId = topTracks?.items?.map(
    (track: { id: string }) => track.id
  );
  const recommendationConfig = {
    method: "get",
    url: `/recommendations?limit=20&seed_tracks=${topTracksId}`,
  };
  const {
    data: recommendation,
    isLoading,
    error,
  } = useQuery<Recommendation>(
    ["recommendation", recommendationConfig],
    () => fetcher(recommendationConfig),
    { enabled: !!topTracksId }
  );
  return {
    data: {
      tracks: recommendation?.tracks,
      seeds: topTracks?.items,
    },
    isLoading,
    error,
  };
};

export default useRecommendation;
