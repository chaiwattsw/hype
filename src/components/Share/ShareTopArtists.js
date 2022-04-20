import { useRef } from "react";
import generateImage from "../../utils/generateImage";
import { durationString } from "../../constants";

const ShareTopArtists = ({ data, duration }) => {
  const componentRef = useRef();
  return (
    <>
      <div id="share-artists" className="hidden" ref={componentRef}>
        <div className="flex justify-center flex-col bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 p-6 w-full md:w-1/3">
          <div className="text-center flex flex-col mb-6">
            <h1 className="text-4xl font-bold [text-shadow:-3px_3px_0_#000]">
              HYPE.
            </h1>
            <div className="mt-6">
              <h1 className="text-3xl font-bold">Your Top Artists</h1>
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
                src={item.images[1].url}
                alt={item.name}
                className="h-16 w-16 rounded-full"
              />

              <p className="text-white text-left font-bold">{item.name}</p>
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
            "share-artists",
            `hype-top-artists-${duration}`
          )
        }
        className="bg-black px-4 py-1 rounded-2xl w-20 font-semibold"
      >
        Share
      </button>
    </>
  );
};

export default ShareTopArtists;
