import { useQuery } from "react-query";
import fetcher from "utils/fetcher";
import { TopArtists } from "types";

const useTopArtists = (duration: string, limit: string) => {
  const config = {
    method: "get",
    url: `/me/top/artists?time_range=${duration}&limit=${limit}`,
  };
  const { data, isLoading, error } = useQuery<TopArtists[], Error>(
    ["TOP_ARTISTS", config],
    async () => {
      const result = await fetcher(config);
      return result.items;
    }
  );
  return { data, isLoading, error };
};

export default useTopArtists;
