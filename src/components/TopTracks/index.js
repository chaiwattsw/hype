import React, { useState, useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { useSpotify } from "../../hooks/useSpotify";
import TopItemsContainer from "../TopItemsContainer";
import TopItemsSkeleton from "../TopItemsSkeleton";
import TopTrackItems from "./TopTrackItems";

const TopTracks = () => {
  const [duration, setDuration] = useState("short_term");
  const { data } = useSpotify(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${duration}&limit=10`
  );
  const componentRef = useRef();

  const duartionString = {
    short_term: "This month",
    medium_term: "Last few months",
    long_term: "All time",
  };

  const generateImage = useCallback(async () => {
    if (componentRef.current === null) return;

    const canvas = await html2canvas(componentRef.current, {
      allowTaint: true,
      useCORS: true,
      width: 382,
      height: 724,
      scale: 3,
      onclone: (doc) => {
        doc.getElementById("share-component").style.display = "block";
      },
    });

    const data = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "hype.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }, [componentRef]);

  return (
    <TopItemsContainer
      title="Top Tracks"
      duration={duration}
      setDuration={setDuration}
    >
      <button
        onClick={generateImage}
        className="bg-black px-4 py-1 rounded-2xl w-20 font-semibold"
      >
        Share
      </button>
      {data ? <TopTrackItems data={data} /> : <TopItemsSkeleton />}
      {data ? (
        <div id="share-component" className="hidden" ref={componentRef}>
          <div className="flex justify-center flex-col bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 p-6 w-full md:w-1/3">
            <div className="text-center flex flex-col mb-6">
              <h1 className="text-4xl font-bold [text-shadow:-2.5px_2.5px_0_#000]">
                HYPE.
              </h1>
              <div className="mt-6">
                <h1 className="text-3xl font-bold">Your Top Tracks</h1>
                <h2 className="text-lg font-bold">
                  {duartionString[duration]}
                </h2>
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
                        <span
                          href={artist.external_urls.spotify}
                          key={artist.id}
                        >
                          {artist.name}
                        </span>
                      ) : (
                        <span
                          href={artist.external_urls.spotify}
                          key={artist.id}
                        >
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
      ) : null}
    </TopItemsContainer>
  );
};

export default TopTracks;
