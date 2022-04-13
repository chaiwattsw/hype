import axios from "axios";
import useSWR from "swr";
import { useAuth } from "./useAuth";

export const useSpotify = (END_POINT) => {
  const { state } = useAuth();

  const fetcher = (url, accessToken) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data);

  const { data, error } = useSWR([END_POINT, state.accessToken], fetcher, {
    suspense: true,
  });

  return { data, error };
};
