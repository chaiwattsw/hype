import { useRef } from "react";
import generateImage from "utils/generateImage";
import { getTodayDate } from "utils/getTodayDate";
import { TopArtists } from "types";

interface FestivalPosterProps {
  artists: TopArtists[];
}

const FestivalPoster = ({ artists }: FestivalPosterProps) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const today = getTodayDate().toUpperCase();

  return (
    <>
      <div>
        <button
          onClick={() =>
            generateImage(
              componentRef,
              "festival-lineup",
              "hype-festival-lineup"
            )
          }
          className="bg-gray-900 hover:bg-gray-800 px-4 py-1 rounded-2xl font-semibold mt-8"
        >
          Download
        </button>
      </div>
      <div
        ref={componentRef}
        id="festival-lineup"
        className="shadow-black shadow-2xl relative h-[850px] w-full md:h-[901px] md:w-[660px] mt-8 mb-24 bg-[url('../src/assets/images/festival-lineup/bg.jpg')] bg-no-repeat bg-center bg-cover"
      >
        <div className="w-full py-6 px-8 md:px-12 flex flex-col justify-center items-center">
          <div className="mb-2 font-bold [text-shadow:-3px_3px_0_#000]">
            <h2 className="text-5xl">HYPE</h2>
            <p id="music-festival" className="text-2xl">
              MUSIC FESTIVAL
            </p>
          </div>
          <div className="w-11/12 mt-4 mb-6">
            <div className="flex items-center">
              <div className="flex-grow border-t border-2 border-white"></div>
              <span
                id="festival-date"
                className="flex-shrink mx-4 text-lg font-semibold"
              >
                {today}
              </span>
              <div className="flex-grow border-t border-2 border-white"></div>
            </div>
          </div>
          <div id="festival-artists">
            {artists?.map((artist, artistIdx) => {
              if (artistIdx <= 2) {
                return (
                  <span
                    id="festival-artists-head"
                    key={artist.id}
                    className="text-2xl md:text-5xl font-bold"
                  >
                    {artist.name} &bull;{" "}
                  </span>
                );
              }
              if (artistIdx <= 20) {
                return (
                  <span
                    id="festival-artists-second"
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
                    id="festival-artists-third"
                    key={artist.id}
                    className="text-md md:text-2xl"
                  >
                    {artist.name} &bull;{" "}
                  </span>
                );
              }
              if (artistIdx === artists.length - 1) {
                return (
                  <span
                    id="festival-artists-third"
                    key={artist.id}
                    className="text-md md:text-2xl"
                  >
                    {artist.name}
                  </span>
                );
              }
              return (
                <span
                  id="festival-artists-third"
                  key={artist.id}
                  className="text-md md:text-2xl"
                >
                  {artist.name}
                </span>
              );
            })}
          </div>

          <div className="absolute bottom-6">
            <p className="text-sm md:text-md font-medium">
              Get your own music festival
            </p>
            <h4 className="text-md md:text-lg font-bold">
              HYPE-SIGMA.VERCEL.APP
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FestivalPoster;
