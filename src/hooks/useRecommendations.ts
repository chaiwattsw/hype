import useSWRImmutable from "swr/immutable";
import axios from "axios";
import { FIVE_TOP_TRACKS } from "../constants";
import useAuth from "./useAuth";

interface UseRecommendations {
  data: {
    seeds: { id: string; name: string }[];
    items: {
      id: string;
      name: string;
      artists: [];
      preview_url: string;
      album: { images: { url: string }[] };
      external_urls: { spotify: string };
    }[];
  };
  error: unknown;
  isLoading: boolean;
}

const useRecommendations = (): UseRecommendations => {
  const { state } = useAuth();
  const fetcher = async (url: string, accessToken: string) =>
    axios
      .get(url, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.error(err.message));

  const { data: topTracks = {} } = useSWRImmutable(
    [FIVE_TOP_TRACKS, state.accessToken],
    fetcher
  );

  const topTracksId = topTracks?.items?.map(
    (track: { id: string }) => track.id
  );

  const { data: recommendTracks = {}, error } = useSWRImmutable(
    () =>
      topTracksId.length > 0
        ? [
            `https://api.spotify.com/v1/recommendations?limit=20&seed_tracks=${topTracksId}`,
            state.accessToken,
          ]
        : null,
    fetcher
  );

  return {
    data: { seeds: topTracks.items, items: recommendTracks.tracks },
    error,
    isLoading: !error && Object.keys(recommendTracks).length === 0,
  };
};

export default useRecommendations;
