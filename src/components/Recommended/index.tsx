import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useRecommendations from "../../hooks/useRecommendations";
import RecommendedContainer from "./RecommendedContainer";
import RecommendedItems from "./RecommendedItems";
import RecommendedSkeleton from "./RecommendedSkeleton";
import useAudio from "hooks/useAudio";

const Recommended: React.FC = () => {
  const {
    state: { accessToken },
  } = useAuth();
  const [likedSongId, setLikedSongId] = useState<string[]>([]);
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const { data, isLoading } = useRecommendations();
  const { items: tracks, seeds } = data || {};
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

  const handlePlay = (url: string | null) => {
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
    <RecommendedContainer tracks={seeds}>
      <Toaster />
      {!isLoading ? (
        tracks?.map((track) => {
          const isLiked = likedSongId.some((item) => item === track.id);
          return (
            <RecommendedItems
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
        })
      ) : (
        <RecommendedSkeleton />
      )}
    </RecommendedContainer>
  );
};

export default Recommended;
