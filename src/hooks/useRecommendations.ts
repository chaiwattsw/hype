import useSWR from "swr";
import axios from "axios";
import useAuth from "./useAuth";

interface UseRecommendations {
  data: { tracks: {}[]; seeds: {}[] } | void;
  error: any;
  isLoading: boolean;
}

const useRecommendations = (id: number[]): UseRecommendations => {
  const { state } = useAuth();
  const fetcher = (url: string, accessToken: string) => {
    return axios
      .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.error(err.message));
  };

  const { data, error } = useSWR(
    () =>
      id.length > 0
        ? [
            `https://api.spotify.com/v1/recommendations?limit=20&seed_tracks=${id}`,
            state.accessToken,
          ]
        : null,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

export default useRecommendations;
