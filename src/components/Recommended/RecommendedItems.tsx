import React, { ReactNode, useState } from "react";
import { HeartIcon, PlayIcon, PauseIcon } from "@heroicons/react/outline";
import { useAudio } from "react-use";

interface RecommendedItemsProps {
  id: string;
  track: string;
  artists: { id: string; name: string; external_urls: { spotify: string } }[];
  src: string;
  img: string;
  href: string;
  onClickSong: () => void;
  liked: boolean;
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
  liked,
}) => {
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const [audio, state, controls] = useAudio({
    src: previewURL ?? "",
    autoPlay: true,
  });

  const handlePlayer = (url: string) => {
    if (url === null) return;
    if (state.playing) return controls.pause();

    setPreviewURL(url);
    controls.play();
  };

  return (
    <div className="basis-48">
      <>{audio}</>
      <div
        className="relative cursor-pointer w-48 h-48"
        onClick={() => handlePlayer(src)}
      >
        <img className="w-48 h-48" src={img} alt={track} />
        <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center">
          {previewURL === src && state.playing ? (
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
            onClick={onClickSong}
            className={`${
              liked ? "fill-white" : ""
            } w-6 h-6 shrink-0 cursor-pointer text-gray-200 hover:text-white`}
          />
        </div>
        <div>
          {artists.map((artist, artistIdx) => (
            <a
              key={artist.id}
              target="_blank"
              rel="noreferrer"
              className="hover:underline font-semibold text-gray-200"
              href={artist.external_urls.spotify}
            >
              {artists.length === 1 || artists.length - 1 === artistIdx
                ? artist.name
                : artist.name + ", "}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedItems;
