import axios from "axios";
import useSWR from "swr";
import { useAuth } from "./useAuth";
import toast from "react-hot-toast";

export const useSpotify = ({ method, url }) => {
  const { state } = useAuth();

  const fetcher = (method, url, accessToken) =>
    axios({
      method: method,
      url: url,
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => {
        if (res.status === 200 && method === "put") {
          toast.success("Added to your Liked Songs", {
            position: "bottom-center",
          });
        }
        if (res.status === 200 && method === "delete") {
          toast.success("Removed from your Liked Songs", {
            position: "bottom-center",
          });
        }
        return res.data;
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "bottom-center",
        });
      });

  const { data, error } = useSWR(
    url && method ? [method, url, state.accessToken] : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  return { data, error, isLoading: !error && !data };
};
