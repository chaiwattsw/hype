import React, { useRef } from "react";
import generateImage from "../../utils/generateImage";
import { getTodayDate } from "../../utils/getDate";

const FestivalPoster = ({ data }) => {
  const componentRef = useRef();
  return (
    <>
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
        id="festival-lineup"
        className="h-[750px] w-full md:h-[901px] md:w-[660px] bg-[url('../src/assets/images/festival-lineup/bg.jpg')] bg-no-repeat bg-center bg-cover"
      >
        <div className="w-full py-6 px-8 md:px-12 flex flex-col justify-center items-center">
          <div className="mb-2">
            <h2 className="text-5xl font-bold [text-shadow:-5px_5px_0_#000]">
              HYPE
            </h2>
            <p className="text-2xl font-bold [text-shadow:-5px_5px_0_#000]">
              MUSIC FESTIVAL
            </p>
          </div>
          <div className="w-11/12 mt-4">
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-2 border-white"></div>
              <span
                id="festival-date"
                className="flex-shrink mx-4 text-lg font-semibold"
              >
                {getTodayDate()}
              </span>
              <div className="flex-grow border-t border-2 border-white"></div>
            </div>
          </div>
          <div id="festival-artists">
            {data?.items?.map((artist, artistIdx) => {
              if (artistIdx <= 2) {
                return (
                  <span
                    name="festival-artists-head"
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
                    name="festival-artists-second"
                    key={artist.id}
                    className="text-xl md:text-4xl font-semibold"
                  >
                    {artist.name} &bull;{" "}
                  </span>
                );
              }
              if (artistIdx >= 21 && artistIdx <= 48) {
                return (
                  <span
                    name="festival-artists-third"
                    key={artist.id}
                    className="text-md md:text-2xl"
                  >
                    {artist.name} &bull;{" "}
                  </span>
                );
              }
              return (
                <span
                  name="festival-artists-third"
                  key={artist.id}
                  className="text-md md:text-2xl"
                >
                  {artist.name}
                </span>
              );
            })}
          </div>

          <div className="absolute bottom-8">
            <p className="text-lg font-medium">Get your own music festival</p>
            <h4 className="text-3xl font-bold [text-shadow:-5px_5px_0_#000]">
              HYPE
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FestivalPoster;
