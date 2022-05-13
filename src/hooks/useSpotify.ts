import axios from "axios";
import useSWR from "swr";
import { useAuth } from "./useAuth";

type TUseSpotify = {
  data: object | undefined;
  error: string | undefined;
  isLoading: boolean;
};

export const useSpotify = (url: string): TUseSpotify => {
  const { state } = useAuth();

  const fetcher = (url: string, accessToken: string): Promise<object> =>
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
