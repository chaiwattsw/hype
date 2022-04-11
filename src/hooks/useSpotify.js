import axios from "axios";
import useSWR from "swr";
import { useAuth } from "./useAuth";

export const useSpotify = (end_point) => {
  const { state } = useAuth();
  const fetcher = (url, accessToken) => {
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => res.data);
  };

  const { data, error } = useSWR([end_point, state.accessToken], fetcher);

  return { data, error };
};
