import React from "react";
import { useSpotify } from "../../hooks/useSpotify";

const Recommended = () => {
  const { data, error } = useSpotify(
    `https://api.spotify.com/v1/recommendations?limit=20&seed_tracks=01Evjih77HRm4aG3YeGcX7%2C6FXosxmFjyqoqtFmWHVQHQ%2C2MrffZEpsGbDoqTha96r5W%2C6NEdccy6N1RTqfjOHLkYk0%2C5hDIdz5FLQnf98ymlLWWU9`
  );

  if (error) {
    return <div>Something went wrong</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full px-4 my-8 text-white">
      <h1 className="text-5xl font-bold text-white">Recommended Songs</h1>
      <p>Based on your top tracks 5 top tracks</p>
      <div className="grid grid-cols-5 gap-4 mt-8">
        {data.tracks.map((track) => (
          <div key={track.id}>
            <img src={track.album.images[1].url} alt={track.name} />
            {track.name} -
            {track.artists.map((artist, idx) =>
              track.artists.length === 1 || track.artists.length - 1 === idx ? (
                <span> {artist.name}</span>
              ) : (
                <span>{artist.name}, </span>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
