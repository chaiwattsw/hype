import React, { useRef } from "react";
import { useSpotify } from "../../hooks/useSpotify";
import generateImage from "../../utils/generateImage";

const FestivalLineup = () => {
  const componentRef = useRef();
  const getArtists = {
    method: "get",
    url: `https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50`,
  };
  const { data } = useSpotify(getArtists);

  return (
    <div className="relative w-full flex flex-wrap flex-col my-8 text-white justify-center items-center text-center">
      <button
        onClick={() =>
          generateImage(componentRef, "festival-lineup", "hype-festival-lineup")
        }
        className="bg-gray-900 hover:bg-gray-800 px-4 py-1 rounded-2xl w-20 font-semibold mb-4"
      >
        Share
      </button>
      <div
        ref={componentRef}
        className="md:h-screen w-full md:w-[660px] bg-[url('../src/assets/images/festival-lineup/bg.jpg')] bg-no-repeat bg-center bg-cover"
      >
        <div className="w-full p-8 flex flex-col justify-center items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-5xl font-bold [text-shadow:-5px_5px_0_#000]">
                HYPE
              </h2>
              <p className="text-2xl font-bold [text-shadow:-5px_5px_0_#000]">
                MUSIC FESTIVAL
              </p>
            </div>

            <div class="flex items-center">
              <div class="flex-grow bg-white h-0.5 w-36"></div>
              <div class="flex-grow-0 mx-5 text-xl font-semibold">
                APRIL 28TH 2022
              </div>
              <div class="flex-grow bg-white h-0.5 w-36"></div>
            </div>
          </div>
          <div className="md:px-10">
            {data?.items?.map((artist, artistIdx) => {
              if (artistIdx <= 2) {
                return (
                  <span
                    key={artist.id}
                    className="text-2xl md:text-6xl font-bold"
                  >
                    {artist.name} &bull;{" "}
                  </span>
                );
              }
              if (artistIdx <= 20) {
                return (
                  <span
                    key={artist.id}
                    className="text-xl md:text-4xl font-semibold"
                  >
                    {artist.name} &bull;{" "}
                  </span>
                );
              }
              if (artistIdx >= 21 && artistIdx <= 48) {
                return (
                  <span key={artist.id} className="text-md md:text-2xl">
                    {artist.name} &bull;{" "}
                  </span>
                );
              }
              return (
                <span key={artist.id} className="text-md md:text-2xl">
                  {artist.name}
                </span>
              );
            })}
          </div>
          <div className="h-0.5 w-[484.55px] mt-5 bg-white"></div>

          <div className="absolute bottom-0 mb-4">
            <p className="text-lg font-medium">Get your own music festival</p>
            <h4 className="text-3xl font-bold [text-shadow:-5px_5px_0_#000]">
              - HYPE -
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalLineup;
