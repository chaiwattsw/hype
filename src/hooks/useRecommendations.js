import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { useAuth } from "./useAuth";

const useRecommendations = (id) => {
  const { state } = useAuth();
  const { data, error } = useSWR(
    () =>
      id.length > 0
        ? [
            "get",
            `https://api.spotify.com/v1/recommendations?limit=20&seed_tracks=${id}`,
            state.accessToken,
          ]
        : null,
    fetcher,
    { revalidateOnFocus: false, revalidateIfStale: false }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

export default useRecommendations;
