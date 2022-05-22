import useSWR from "swr";
import axios from "axios";
import { SPOTIFY_PROFILE } from "../constants";
import useAuth from "./useAuth";

const useTopItems = () => {
  const { state } = useAuth();
  const fetcher = (url: string, accessToken: string) =>
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        return res.data;
      });
  const { data, error } = useSWR(
    [SPOTIFY_PROFILE, state.accessToken],
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  return { data, error, isLoading: !error && !data };
};

export default useTopItems;
