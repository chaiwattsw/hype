import axios from "axios";
import useSWR from "swr";
import { useAuth } from "./useAuth";

export const useSpotify = (END_POINT) => {
  const { state } = useAuth();
  const undefinedEndpoint = END_POINT.includes("undefined");

  const fetcher = (url, accessToken) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data);

  const { data, error } = useSWR(
    !undefinedEndpoint ? [END_POINT, state.accessToken] : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return { data, error };
};
