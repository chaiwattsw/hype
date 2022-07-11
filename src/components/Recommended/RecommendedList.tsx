import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAudio, useAuth } from "hooks";
import { Tracks } from "types";
import RecommendedItem from "./RecommendedItem";

type RecommendedList = {
  tracks: Tracks[];
};

const RecommendedList = ({ tracks }: RecommendedList) => {
  const {
    state: { accessToken },
  } = useAuth();
  const [likedSongId, setLikedSongId] = useState<string[]>([]);
  const [currentSong, setCurrentSong] = useState<string>("");
  const [playing, toggle] = useAudio(currentSong);

  const addSongToLibrary = async (songId: string) => {
    const res = await axios.put(
      `https://api.spotify.com/v1/me/tracks`,
      { ids: [songId] },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    if (res.status === 200) {
      toast.success("Added to your Liked Songs", {
        position: "bottom-center",
      });
    }
  };

  const deleteSongFromLibrary = async (songId: string) => {
    const res = await axios.delete(
      `https://api.spotify.com/v1/me/tracks?ids=${songId}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (res.status === 200) {
      toast.success("Removed from your Liked Songs", {
        position: "bottom-center",
      });
    }
  };

  const handlePlay = (url: string) => {
    setCurrentSong(url);
    toggle();
  };

  const handleLikedSong = (songId: string) => {
    if (likedSongId.some((item) => item === songId)) {
      const removeSelectedSong = likedSongId.filter((song) => song !== songId);
      deleteSongFromLibrary(songId);
      setLikedSongId([...removeSelectedSong]);
      return;
    }
    addSongToLibrary(songId);
    setLikedSongId((prevLikedSongId) => [...prevLikedSongId, songId]);
  };
  return (
    <div className="flex flex-row flex-wrap gap-16 justify-center">
      {tracks?.map((track) => {
        const isLiked = likedSongId.some((item) => item === track.id);
        return (
          <RecommendedItem
            key={track.id}
            id={track.id}
            track={track.name}
            artists={track.artists}
            src={track.preview_url}
            img={track.album.images[1].url}
            href={track.external_urls.spotify}
            onPlay={handlePlay}
            onClickSong={handleLikedSong}
            isLiked={isLiked}
            isPlaying={playing}
          />
        );
      })}
    </div>
  );
};

export default RecommendedList;
