import { useQuery } from "react-query";
import fetcher from "utils/fetcher";
import { Tracks } from "types";

const useTopTracks = (duration: string, token: string) => {
  const config = {
    method: "get",
    url: `/me/top/tracks?time_range=${duration}&limit=10`,
    token,
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
