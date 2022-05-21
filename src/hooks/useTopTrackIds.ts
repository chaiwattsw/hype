import { FIVE_TOP_TRACKS } from "../constants";
import useSpotify from "./useSpotify";

interface UseTopTrackIds {
  id: string[];
  tracks: { id: string; name: string }[];
}

const useToptrackIds = (): UseTopTrackIds => {
  const { data } = useSpotify(FIVE_TOP_TRACKS);
  if (data) {
    let id = data.items.map((item: { id: string }) => item.id);
    return { id: id, tracks: data.items };
  }

  return { id: [], tracks: [] };
};

export default useToptrackIds;
