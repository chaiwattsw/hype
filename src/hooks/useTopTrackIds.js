import { FIVE_TOP_TRACKS } from "../constants";
import { useSpotify } from "./useSpotify";

const useToptrackIds = () => {
  // const { data } = useSpotify(FIVE_TOP_TRACKS);
  const { data } = useSpotify(
    "https://api.spotify.com/v1/me/player/recently-played?limit=5"
  );
  if (data) {
    let id = data.items.map((item) => item.track.id);
    return { id: id, tracks: data.items };
  }

  return { id: [], tracks: [] };
};

export default useToptrackIds;
