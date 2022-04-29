import useSWR from "swr";
import { useAuth } from "./useAuth";
import fetcher from "../utils/fetcher";
import { FIVE_TOP_TRACKS } from "../constants";

const useToptrackIds = () => {
  const { state } = useAuth();
  const { data } = useSWR(
    ["get", FIVE_TOP_TRACKS, state.accessToken],
    fetcher,
    { revalidateOnFocus: false, revalidateIfStale: false }
  );
  if (data) {
    let id = data.items.map((item) => item.id);
    return { tracks: data.items, id: id };
  }
};

export default useToptrackIds;
