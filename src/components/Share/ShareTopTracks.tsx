import React, { useRef } from "react";
import generateImage from "utils/generateImage";
import { durationString } from "../../constants";
import { Tracks } from "types";

interface ShareTopTracksProps {
  tracks: Tracks[];
  duration: string;
}

const ShareTopTracks: React.FC<ShareTopTracksProps> = ({
  tracks,
  duration,
}) => {
  const componentRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
      <div
        id="share-tracks"
        className="hidden w-[21.875rem]"
        ref={componentRef}
      >
        <div className="flex justify-center items-center flex-col bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 px-6 py-2">
          <div className="text-center flex flex-col">
            <h1 className="text-4xl font-bold [text-shadow:-3px_3px_0_#000]">
              HYPE
            </h1>
            <div className="mt-4">
              <h1 className="text-xl font-bold">Your Top Tracks</h1>
              <h2 className="text-lg font-semibold">
                {durationString[duration]}
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-8 my-6">
            {tracks.slice(0, 5).map((track, idx) => (
              <div key={track.id} className="flex items-center gap-6 w-full">
                <span className="font-semibold text-xl w-5">#{idx + 1}</span>
                <img
                  src={track.album.images[1].url}
                  alt={track.name}
                  className="h-16 w-16 mt-4"
                />
                <div className="text-white text-left">
                  <p className="font-bold text-sm">{track.name}</p>
                  <div className="text-sm">
                    {track.artists.map((artist, artistIdx) => (
                      <span key={artist.id}>
                        {track.artists.length === 1 ||
                        track.artists.length - 1 === artistIdx
                          ? artist.name
                          : artist.name + ", "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-2">
            <p className="text-xs font-medium">See your top tracks</p>
            <h4 className="text-xs font-bold">HYPE-SIGMA.VERCEL.APP</h4>
          </div>
        </div>
      </div>
      <div className="mr-auto">
        <button
          onClick={() =>
            generateImage(
              componentRef,
              "share-tracks",
              `hype-top-tracks-${duration}`
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

export default ShareTopTracks;
