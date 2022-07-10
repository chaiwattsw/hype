import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import axios from "axios";
import { useAudio, useRecommendation, useAuth } from "hooks";
import RecommendedContainer from "./RecommendedContainer";
import RecommendedItem from "./RecommendedItem";

const Recommended = () => {
  const {
    state: { accessToken },
  } = useAuth();
  const [likedSongId, setLikedSongId] = useState<string[]>([]);
  const [currentSong, setCurrentSong] = useState<string>("");
  const { data: recommendation } = useRecommendation();
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
    <RecommendedContainer tracks={recommendation.seeds}>
      <Toaster />
      {recommendation.tracks?.map((track) => {
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
    </RecommendedContainer>
  );
};

export default Recommended;
