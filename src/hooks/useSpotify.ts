import axios from "axios";
import useSWR from "swr";
import useAuth from "./useAuth";

interface UseSpotify {
  data: { items: { id: number }[] } | undefined;
  error: any;
  isLoading: boolean;
}

const useSpotify = (url: string) => {
  const { state } = useAuth();

  const fetcher = (url: string, accessToken: string) =>
    axios
      .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => {
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

export default useSpotify;
