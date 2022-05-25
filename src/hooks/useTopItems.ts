import useSWRImmutable from "swr/immutable";
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
  const { data, error } = useSWRImmutable(
    [SPOTIFY_PROFILE, state.accessToken],
    fetcher
  );
  return { data, error, isLoading: !error && !data };
};

export default useTopItems;
