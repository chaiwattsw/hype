import React, { useState } from "react";
import ShareTopTracks from "../../components/Share/ShareTopTracks";
import useSpotify from "../../hooks/useSpotify";
import TopItemsContainer from "../TopItemsContainer";
import TopItemsSkeleton from "../TopItemsSkeleton";
import TopTrackItems from "./TopTrackItems";

const TopTracks: React.FC = () => {
  const [duration, setDuration] = useState<string>("short_term");
  const { data, isLoading } = useSpotify(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${duration}&limit=10`
  );
  const { items: tracks } = data || {};

  return (
    <TopItemsContainer
      title="Top Tracks"
      duration={duration}
      setDuration={setDuration}
    >
      {!isLoading && <ShareTopTracks tracks={tracks} duration={duration} />}
      {!isLoading ? (
        tracks.map((track, trackIdx: number) => (
          <TopTrackItems
            trackIdx={trackIdx}
            key={track.id}
            name={track.name}
            img={track.album.images[1].url}
            href={track.external_urls.spotify}
            artists={track.artists}
          />
        ))
      ) : (
        <TopItemsSkeleton />
      )}
    </TopItemsContainer>
  );
};

export default TopTracks;
