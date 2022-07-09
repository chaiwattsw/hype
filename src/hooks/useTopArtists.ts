import { useQuery } from "react-query";
import fetcher from "utils/fetcher";

interface Image {
  height: number;
  url: string;
  width: number;
}

interface ITopArtists {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

const useTopArtists = (duration: string, limit: string) => {
  const config = {
    method: "get",
    url: `/me/top/artists?time_range=${duration}&limit=${limit}`,
  };
  const { data, isLoading, error } = useQuery<ITopArtists[], Error>(
    ["TOP_ARTISTS", config],
    async () => {
      const result = await fetcher(config);
      return result.items;
    }
  );
  return { data, isLoading, error };
};

export default useTopArtists;
