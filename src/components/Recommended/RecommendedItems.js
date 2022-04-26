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
              className="cursor-pointer w-60 h-60 md:w-full md:h-full"
              src={track.album.images[1].url}
              alt={track.name}
            />

            <div className="mt-2">
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={track.external_urls.spotify}
                  className="font-bold text-white"
                >
                  {track.name}
                </a>
              </div>
              <div>
                {track.artists.map((artist, artistIdx) => (
                  <a
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
