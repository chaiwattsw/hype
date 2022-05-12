import useSWR from "swr";
import axios from "axios";
import { useAuth } from "./useAuth";

const useRecommendations = (id) => {
  const { state } = useAuth();
  const fetcher = (url, accessToken) => {
    axios
      .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => {
        return res.data;
      });
  };

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
    { revalidateOnFocus: false }
  );

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

export default useRecommendations;
