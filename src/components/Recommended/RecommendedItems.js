import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { HeartIcon } from "@heroicons/react/outline";
import { Toaster } from "react-hot-toast";
import useAudio from "../../hooks/useAudio";
import toast from "react-hot-toast";
import axios from "axios";

const RecommendedItems = ({ items }) => {
  const [previewURL, setPreviewURL] = useState();
  const [toggle] = useAudio(previewURL);
  const [likedSongId, setLikedSongId] = useState([]);
  const { state } = useAuth();

  const handlePlayer = (url) => {
    if (url === null) {
      setPreviewURL(null);
      return;
    }
    setPreviewURL(url);
    toggle();
  };

  const addSongToLibrary = async (songId) => {
    const res = await axios.put(
      `https://api.spotify.com/v1/me/tracks`,
      { ids: [songId] },
      { headers: { Authorization: `Bearer ${state.accessToken}` } }
    );

    if (res.status === 200) {
      toast.success("Added to your Liked Songs", {
        position: "bottom-center",
      });
    }
  };

  const deleteSongFromLibrary = async (songId) => {
    const res = await axios.delete(
      `https://api.spotify.com/v1/me/tracks?ids=${songId}`,
      { headers: { Authorization: `Bearer ${state.accessToken}` } }
    );
    if (res.status === 200) {
      toast.success("Removed from your Liked Songs", {
        position: "bottom-center",
      });
    }
  };

  const handleLikedSong = async (songId) => {
    if (likedSongId.some((item) => item === songId)) {
      const removeSelectedSong = likedSongId.filter((song) => song !== songId);
      deleteSongFromLibrary(songId);
      setLikedSongId([...removeSelectedSong]);
      return;
    }
    addSongToLibrary(songId);
    setLikedSongId([...likedSongId, songId]);
  };

  return (
    <div className="flex flex-row justify-center flex-wrap gap-8 md:gap-16 mt-8">
      <Toaster />
      {items?.tracks?.map((track) => {
        return (
          <div key={track.id} className="basis-48">
            <img
              onClick={() => handlePlayer(track.preview_url)}
              className="cursor-pointer w-48 h-48"
              src={track.album.images[1].url}
              alt={track.name}
            />

            <div className="mt-2">
              <div className="flex justify-between">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={track.external_urls.spotify}
                  className="font-bold text-white hover:underline"
                >
                  {track.name}
                </a>
                <HeartIcon
                  onClick={() => handleLikedSong(track.id)}
                  className={`${
                    likedSongId.some((item) => item === track.id)
                      ? "fill-white"
                      : ""
                  } w-6 h-6 shrink-0 cursor-pointer text-gray-200 hover:text-white`}
                />
              </div>
              <div>
                {track?.artists?.map((artist, artistIdx) => (
                  <a
                    key={artist.id}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline font-semibold text-gray-200"
                    href={artist.external_urls.spotify}
                  >
                    {track.artists.length === 1 ||
                    track.artists.length - 1 === artistIdx
                      ? artist.name
                      : artist.name + ", "}
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedItems;
