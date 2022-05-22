import React, { useState } from "react";
import ShareTopArtists from "../Share/ShareTopArtists";
import useSpotify from "../../hooks/useSpotify";
import TopItemsContainer from "../TopItemsContainer";
import TopItemsSkeleton from "../TopItemsSkeleton";
import TopArtistItems from "./TopArtistItems";

const TopArtists = () => {
  const [duration, setDuration] = useState("short_term");
  const { data, isLoading } = useSpotify(
    `https://api.spotify.com/v1/me/top/artists?time_range=${duration}&limit=10`
  );
  const { items: artists } = data || {};

  return (
    <TopItemsContainer
      title="Top Artists"
      duration={duration}
      setDuration={setDuration}
    >
      {!isLoading && <ShareTopArtists artists={artists} duration={duration} />}
      {!isLoading ? (
        artists.map((artist, artistIdx: number) => (
          <TopArtistItems
            artistIdx={artistIdx}
            key={artist.id}
            img={artist.images[1].url}
            name={artist.name}
            href={artist.external_urls.spotify}
          />
        ))
      ) : (
        <TopItemsSkeleton rounded />
      )}
    </TopItemsContainer>
  );
};

export default TopArtists;
