import React, { useState, useRef } from "react";

const RecommendedItems = ({ data }) => {
  const [previewURL, setPreviewURL] = useState();

  const playerRef = useRef();

  const handlePlayer = (url) => {
    playerRef.current.volume = 0.5;

    if (playerRef.current.currentSrc === url && !playerRef.current.paused) {
      playerRef.current.pause();
    } else {
      setPreviewURL(url);
      playerRef.current.pause();
      playerRef.current.load();
      playerRef.current.play();
    }
  };

  return (
    <div className="grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-5 gap-4 mt-8">
      <audio ref={playerRef}>
        <source src={previewURL} />
      </audio>
      {data.tracks.map((track) => {
        return (
          <div key={track.id} className="mb-3">
            <img
              onClick={() => handlePlayer(track.preview_url)}
              className="cursor-pointer"
              src={track.album.images[1].url}
              alt={track.name}
            />

            <p className="font-bold text-white">{track.name}</p>
            <p className="font-semibold text-gray-200">
              {track.artists.map((artist, idx) =>
                track.artists.length === 1 ||
                track.artists.length - 1 === idx ? (
                  <span key={artist.id}>{artist.name}</span>
                ) : (
                  <span key={artist.id}>{artist.name}, </span>
                )
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendedItems;
