import React from "react";
import ArtistLink from "../ArtistLink";

interface TopTrackItemsProps {
  trackIdx: number;
  name: string;
  href: string;
  img: string;
  artists: { id: string; name: string; external_urls: { spotify: string } }[];
}

const TopTrackItems: React.FC<TopTrackItemsProps> = ({
  name,
  href,
  img,
  artists,
  trackIdx,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center">
        <div className="w-10 text-left">
          <span className="font-semibold">#{trackIdx + 1}</span>
        </div>
        <a href={href} target="_blank" rel="noreferrer">
          <img src={img} alt={name} className="h-16 w-16 mr-4" />
        </a>
        <div className="block text-left">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-white hover:underline"
          >
            {name}
          </a>
          <div className="font-semibold text-gray-200">
            {artists.map((artist, artistIdx) => {
              if (artists.length === 1 || artists.length - 1 === artistIdx) {
                return (
                  <ArtistLink
                    key={artist.id}
                    name={artist.name}
                    href={artist.external_urls.spotify}
                  />
                );
              }
              return (
                <ArtistLink
                  key={artist.id}
                  name={`${artist.name}, `}
                  href={artist.external_urls.spotify}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTrackItems;
