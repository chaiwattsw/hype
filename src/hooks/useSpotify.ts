import axios from "axios";
import useSWR from "swr";
import { useAuth } from "./useAuth";

interface UseSpotify {
  data: {} | undefined;
  error: string | undefined;
  isLoading: boolean;
}

export const useSpotify = (url: string): UseSpotify => {
  const { accessToken } = useAuth();

  const fetcher = (url: string, accessToken: string) =>
    axios
      .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => {
        return res.data;
      });

  const { data, error } = useSWR(url ? [url, accessToken] : null, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return { data, error, isLoading: !error && !data };
};