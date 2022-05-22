import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useRecommendations from "../../hooks/useRecommendations";
import useToptrackIds from "../../hooks/useTopTrackIds";
import RecommendedContainer from "./RecommendedContainer";
import RecommendedItems from "./RecommendedItems";
import RecommendedSkeleton from "./RecommendedSkeleton";

const Recommended: React.FC = () => {
  const {
    state: { accessToken },
  } = useAuth();
  const [likedSongId, setLikedSongId] = useState<string[]>([]);
  const { tracks: topTracks, id } = useToptrackIds();
  const { data, isLoading } = useRecommendations(id);
  const { tracks } = data || {};

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

  const handleLikedSong = async (songId: string) => {
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
    <RecommendedContainer tracks={topTracks}>
      <Toaster />
      {!isLoading ? (
        tracks.map((track) => (
          <RecommendedItems
            key={track.id}
            id={track.id}
            track={track.name}
            artists={track.artists}
            src={track.preview_url}
            img={track.album.images[1].url}
            href={track.external_urls.spotify}
            onClickSong={() => handleLikedSong(track.id)}
            liked={likedSongId.some((item) => item === track.id)}
          />
        ))
      ) : (
        <RecommendedSkeleton />
      )}
    </RecommendedContainer>
  );
};

export default Recommended;
