import React, { ReactNode } from "react";
import ArtistLink from "../../components/ArtistLink";
import { HeartIcon, PlayIcon, PauseIcon } from "@heroicons/react/outline";

interface RecommendedItemsProps {
  id: string;
  track: string;
  artists: { id: string; name: string; external_urls: { spotify: string } }[];
  src: string;
  img: string;
  href: string;
  onClickSong: (id: string) => void;
  onPlay: (url: string) => void;
  isLiked: boolean;
  isPlaying: boolean;
  children?: ReactNode;
}

const RecommendedItems: React.FC<RecommendedItemsProps> = ({
  id,
  track,
  artists,
  src,
  img,
  href,
  onClickSong,
  onPlay,
  isLiked,
  isPlaying,
}) => {
  const handlePlay = () => onPlay(src);
  const handleOnClickSong = () => onClickSong(id);

  return (
    <div className="basis-48">
      <div className="relative cursor-pointer w-48 h-48" onClick={handlePlay}>
        <img className="w-48 h-48" src={img} alt={track} />
        <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center">
          {isPlaying ? (
            <PauseIcon className="h-16 w-16 opacity-75" />
          ) : (
            <PlayIcon className="h-16 w-16 opacity-75" />
          )}
        </div>
      </div>

      <div className="mt-2">
        <div className="flex justify-between">
          <a
            target="_blank"
            rel="noreferrer"
            href={href}
            className="font-bold text-white hover:underline"
          >
            {track}
          </a>
          <HeartIcon
            onClick={handleOnClickSong}
            className={`${
              isLiked ? "fill-white" : ""
            } w-6 h-6 shrink-0 cursor-pointer text-gray-200 hover:text-white`}
          />
        </div>
        <div className="font-semibold text-gray-200">
          {artists.map((artist, artistIdx) => {
            if (artists.length === 1 || artists.length - 1 === artistIdx) {
              return (
                <ArtistLink
                  key={artistIdx}
                  name={artist.name}
                  href={artist.external_urls.spotify}
                />
              );
            }
            return (
              <ArtistLink
                key={artistIdx}
                name={`${artist.name}, `}
                href={artist.external_urls.spotify}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendedItems;
