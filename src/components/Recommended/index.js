import React from "react";
import { useSpotify } from "../../hooks/useSpotify";

const Recommended = () => {
  const getTopTracks = useSpotify(
    `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5`
  );
  const topTrackIDs = getTopTracks.data.items.map((item) => [item.id]);
  const topTrackIDsParam = topTrackIDs.join("%2C");
  const { data, error } = useSpotify(
    `https://api.spotify.com/v1/recommendations?limit=20&seed_tracks=${topTrackIDsParam}`
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
            <p>{track.name}</p>
            <p>
              {track.artists.map((artist, idx) =>
                track.artists.length === 1 ||
                track.artists.length - 1 === idx ? (
                  <span> {artist.name}</span>
                ) : (
                  <span>{artist.name}, </span>
                )
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
