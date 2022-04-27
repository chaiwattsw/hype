import React, { useState, useRef } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { useSpotify } from "../../hooks/useSpotify";
import { Toaster } from "react-hot-toast";

const RecommendedItems = ({ items }) => {
  const [previewURL, setPreviewURL] = useState();
  const [track, setTrack] = useState({ method: undefined, url: undefined });
  const [likedSongId, setLikedSongId] = useState([]);
  const { data } = useSpotify(track);
  const playerRef = useRef();

  const handlePlayer = (url) => {
    playerRef.current.volume = 0.5;

    if (playerRef.current.currentSrc === url) {
      playerRef.current.pause();
    } else {
      setPreviewURL(url);
      playerRef.current.load();
      playerRef.current.play();
    }
  };

  const addSongToLibrary = (songId) => {
    setLikedSongId([...likedSongId, songId]);
    setTrack({
      ...track,
      method: "put",
      url: `https://api.spotify.com/v1/me/tracks?ids=${songId}`,
    });
  };

  const deleteSongFromLibrary = (songId) => {
    setTrack({
      ...track,
      method: "delete",
      url: `https://api.spotify.com/v1/me/tracks?ids=${songId}`,
    });
  };

  const handleLikedSong = (songId) => {
    if (likedSongId.some((item) => item === songId)) {
      const removeSelectedSong = likedSongId.filter((song) => song !== songId);
      setLikedSongId([...removeSelectedSong]);
      deleteSongFromLibrary(songId);
      return;
    }
    setLikedSongId([...likedSongId, songId]);
    addSongToLibrary(songId);
  };

  return (
    <div className="flex flex-row justify-center flex-wrap gap-8 md:gap-16 mt-8">
      <Toaster />
      <audio ref={playerRef}>
        <source src={previewURL} />
      </audio>
      {items.tracks.map((track) => {
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
                {track.artists.map((artist, artistIdx) => (
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
