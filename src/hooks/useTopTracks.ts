import { useQuery } from "react-query";
import fetcher from "utils/fetcher";
import type { Tracks } from "types";

const useTopTracks = (duration: string) => {
  const config = {
    method: "get",
    url: `/me/top/tracks?time_range=${duration}&limit=10`,
  };
  const { data, isLoading, error } = useQuery<Tracks[], Error>(
    ["TOP_TRACKS", config],
    async () => {
      const result = await fetcher(config);
      return result.items;
    }
  );
  return { data, isLoading, error };
};
export default useTopTracks;
