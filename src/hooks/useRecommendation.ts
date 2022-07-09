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

interface ITrack {
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

interface ISeeds {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string;
  id: string;
  initialPoolSize: number;
  type: "ARTIST" | "TRACK" | "GENRE";
}

interface IRecommendation {
  tracks: ITrack[];
  seeds: ISeeds;
}

const useRecommendation = () => {
  const topTracksconfig = { method: "get", url: "/me/top/tracks?limit=5" };
  const { data: topTracks } = useQuery(["5-top-track", topTracksconfig], () =>
    fetcher(topTracksconfig)
  );
  const topTracksId = topTracks?.items?.map(
    (track: { id: string }) => track.id
  );
  const recommendationConfig = {
    method: "get",
    url: `/recommendations?limit=20&seed_tracks=${topTracksId}`,
  };
  const {
    data: recommendation,
    isLoading,
    error,
  } = useQuery<IRecommendation>(
    ["recommendation", recommendationConfig],
    () => fetcher(recommendationConfig),
    { enabled: !!topTracksId }
  );
  return {
    data: {
      tracks: recommendation?.tracks,
      seeds: topTracks?.items,
    },
    isLoading,
    error,
  };
};

export default useRecommendation;
