import { useQuery } from "react-query";
import fetcher from "utils/fetcher";

interface Artists {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: "artist";
  uri: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface Album {
  album_type: "ALBUM";
  artists: Artists[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: "album";
  uri: string;
}

interface ITracks {
  album: Album;
  artists: Artists[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: { spotify: string };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: "track";
  uri: string;
}

const useTopTracks = (duration: string) => {
  const config = {
    method: "get",
    url: `/me/top/tracks?time_range=${duration}&limit=10`,
  };
  const { data, isLoading, error } = useQuery<ITracks[], Error>(
    ["TOP_TRACKS", config],
    async () => {
      const result = await fetcher(config);
      return result.items;
    }
  );
  return { data, isLoading, error };
};
export default useTopTracks;
