import React, { ReactNode, useRef } from "react";
import generateImage from "utils/generateImage";
import { durationString } from "../../constants";

interface ArtistProps {
  id: string;
  external_urls: { spotify: string };
  images: { url: string }[];
  name: string;
}

interface ShareTopArtistsProps {
  artists: ArtistProps[];
  duration: string;
  children?: ReactNode;
}

const ShareTopArtists: React.FC<ShareTopArtistsProps> = ({
  artists,
  duration,
}) => {
  const componentRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <div
        id="share-artists"
        className="hidden w-[21.875rem]"
        ref={componentRef}
      >
        <div className="flex justify-center items-center flex-col px-6 py-2 bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600">
          <div className="text-center flex flex-col mb-6">
            <h1 className="text-4xl font-bold [text-shadow:-3px_3px_0_#000]">
              HYPE
            </h1>
            <div className="mt-4">
              <h1 className="text-xl font-bold">Your Top Artists</h1>
              <h2 className="text-lg font-semibold">
                {durationString[duration]}
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-8 mb-6">
            {artists.slice(0, 5).map((artist, idx) => (
              <div
                key={artist.id}
                className="flex items-center flex-row gap-6 w-full"
              >
                <span className="font-semibold text-xl w-5">#{idx + 1}</span>
                <img
                  src={artist.images[1].url}
                  alt={artist.name}
                  className="h-16 w-16 rounded-full mt-4"
                />
                <p className="text-white text-left font-bold">{artist.name}</p>
              </div>
            ))}
          </div>
          <div className="mb-2">
            <p className="text-xs font-medium">See your top artists</p>
            <h4 className="text-xs font-bold">HYPE-SIGMA.VERCEL.APP</h4>
          </div>
        </div>
      </div>
      <div className="mr-auto">
        <button
          onClick={() =>
            generateImage(
              componentRef,
              "share-artists",
              `hype-top-artists-${duration}`
            )
          }
          className="bg-gray-900 hover:bg-gray-800 px-4 py-1 rounded-2xl font-semibold"
        >
          Download
        </button>
      </div>
    </>
  );
};

export default ShareTopArtists;
