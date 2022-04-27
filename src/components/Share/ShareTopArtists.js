import { useRef } from "react";
import generateImage from "../../utils/generateImage";
import { durationString } from "../../constants";

const ShareTopArtists = ({ data, duration }) => {
  const componentRef = useRef();

  return (
    <>
      <div
        id="share-artists"
        className="hidden w-[21.875rem]"
        ref={componentRef}
      >
        <div className="flex justify-center flex-col px-6 py-2 w-full md:w-1/3">
          <div className="text-center flex flex-col mb-6">
            <h1 className="text-4xl font-bold [text-shadow:-3px_3px_0_#000]">
              HYPE
            </h1>
            <div className="my-6">
              <h1 className="text-3xl font-bold">Your Top Artists</h1>
              <h2 className="text-lg font-bold mt-4">
                {durationString[duration]}
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-8 mb-6">
            {data.items.slice(0, 5).map((item, idx) => (
              <div key={item.id} className="flex items-center flex-row gap-6">
                <span name="share-center" className="font-semibold text-xl w-5">
                  #{idx + 1}
                </span>

                <img
                  name="share-image"
                  src={item.images[1].url}
                  alt={item.name}
                  className="h-16 w-16 rounded-full"
                />

                <p
                  name="share-center"
                  className="text-white text-left font-bold"
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <h3 className="font-bold text-sm mb-2">
            See your top artists at Hype
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
