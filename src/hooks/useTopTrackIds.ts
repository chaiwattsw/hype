import { FIVE_TOP_TRACKS } from "../constants";
import useSpotify from "./useSpotify";

interface UseTopTrackIds {
  id: number[];
  tracks: {}[];
}

const useToptrackIds = (): UseTopTrackIds => {
  const { data } = useSpotify(FIVE_TOP_TRACKS);
  if (data) {
    let id = data.items.map((item: { id: number }) => item.id);
    return { id: id, tracks: data.items };
  }

  return { id: [], tracks: [] };
};

export default useToptrackIds;
