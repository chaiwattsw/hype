import React, { useRef } from "react";
import generateImage from "../../utils/generateImage";
import { durationString } from "../../constants";

const ShareTopTracks = ({ data, duration }) => {
  const componentRef = useRef();
  return (
    <>
      <div id="share-tracks" className="hidden" ref={componentRef}>
        <div className="flex justify-center flex-col bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 p-6 w-full md:w-1/3">
          <div className="text-center flex flex-col mb-6">
            <h1 className="text-4xl font-bold [text-shadow:-3px_3px_0_#000]">
              HYPE.
            </h1>
            <div className="mt-6">
              <h1 className="text-3xl font-bold">Your Top Tracks</h1>
              <h2 className="text-lg font-bold">{durationString[duration]}</h2>
            </div>
          </div>
          {data.items.slice(0, 5).map((item, idx) => (
            <div
              key={item.id}
              className="flex items-center flex-row gap-6 mb-8"
            >
              <div className="text-left">
                <span className="font-semibold text-xl">#{idx + 1}</span>
              </div>
              <img
                src={item.album.images[1].url}
                alt={item.name}
                className="h-16 w-16"
              />
              <div className="text-white text-left">
                <p className="font-bold">{item.name}</p>
                <div className="text-sm">
                  {item.artists.map((artist, idx) =>
                    item.artists.length === 1 ||
                    item.artists.length - 1 === idx ? (
                      <span href={artist.external_urls.spotify} key={artist.id}>
                        {artist.name}
                      </span>
                    ) : (
                      <span href={artist.external_urls.spotify} key={artist.id}>
                        {artist.name},{" "}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
          <h3 className="font-bold text-md mt-4">
            See your top tracks at Hype
          </h3>
        </div>
      </div>
      <button
        onClick={() =>
          generateImage(
            componentRef,
            "share-tracks",
            `hype-top-tracks-${duration}`
          )
        }
        className="bg-black px-4 py-1 rounded-2xl w-20 font-semibold"
      >
        Share
      </button>
    </>
  );
};

export default ShareTopTracks;
