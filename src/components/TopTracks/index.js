import React, { useState, useRef } from "react";
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
  // const shareComponent = useRef();

  // const downloadImage = async () => {
  //   const element = shareComponent.current;
  //   const canvas = await html2canvas(element, {
  //     allowTaint: true,
  //     useCORS: true,
  //   });

  //   const data = canvas.toDataURL("image/png");
  //   const link = document.createElement("a");

  //   if (typeof link.download === "string") {
  //     link.href = data;
  //     link.download = "hype.png";

  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } else {
  //     window.open(data);
  //   }
  // };

  return (
    <TopItemsContainer
      title="Top Tracks"
      duration={duration}
      setDuration={setDuration}
    >
      {/* <button onClick={downloadImage} className="bg-green-500 p-6">
        Share
      </button>

      <div ref={shareComponent} className="grid grid-cols-5 gap-6">
        {data?.items?.map((item) => (
          <div>
            <img src={item.album.images[1].url} />
            <p className="text-black">{item.name}</p>
          </div>
        ))}
      </div> */}

      {data ? <TopTrackItems data={data} /> : <TopItemsSkeleton />}
    </TopItemsContainer>
  );
};

export default TopTracks;
