import axios from "axios";
import useSWR from "swr";
import { useAuth } from "./useAuth";

export const useSpotify = (url) => {
  const { state } = useAuth();

  const fetcher = (url, accessToken) =>
    axios.get(url, { Authorization: `Bearer ${accessToken}` }).then((res) => {
      return res.data;
    });

  const { data, error } = useSWR(
    url ? [url, state.accessToken] : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  return { data, error, isLoading: !error && !data };
};
