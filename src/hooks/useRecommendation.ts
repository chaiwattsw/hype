import { useQuery } from "react-query";
import fetcher from "utils/fetcher";
import { Recommendation } from "types";

const useRecommendation = (token: string) => {
  const topTracksconfig = {
    method: "get",
    url: "/me/top/tracks?limit=5",
    token,
  };
  const { data: topTracks } = useQuery(["5_TOP_TRACKS", topTracksconfig], () =>
    fetcher(topTracksconfig)
  );
  const topTracksId = topTracks?.items?.map(
    (track: { id: string }) => track.id
  );
  const recommendationConfig = {
    method: "get",
    url: `/recommendations?limit=20&seed_tracks=${topTracksId}`,
    token,
  };
  const {
    data: recommendation,
    isLoading,
    isError,
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
    isError,
  };
};

export default useRecommendation;
