import { useState } from "react";
import { useTopTracks } from "hooks";
import ShareTopTracks from "../Share/ShareTopTracks";
import TopItemsSkeleton from "../TopItemsSkeleton";
import TopTrackItems from "./TopTrackItems";
import TopItemsDuration from "components/TopItemsDuration";
import { DurationState } from "types";

const TopTracks = () => {
  const [duration, setDuration] = useState<DurationState>("short_term");
  const { data: tracks, isLoading } = useTopTracks(duration);

  return (
    <div className="w-full flex flex-col gap-6 my-8">
      <TopItemsDuration
        title="Top Tracks"
        duration={duration}
        setDuration={setDuration}
      />
      {!isLoading && tracks ? (
        <>
          <ShareTopTracks tracks={tracks} duration={duration} />
          <div className="flex flex-row">
            <div className="flex w-full md:w-1/2 flex-col gap-6">
              {tracks.map((track, trackIdx: number) => (
                <TopTrackItems
                  trackIdx={trackIdx}
                  key={track.id}
                  name={track.name}
                  img={track.album.images[1].url}
                  href={track.external_urls.spotify}
                  artists={track.artists}
                />
              ))}
            </div>
            <div className="hidden md:flex flex-col w-1/2 justify-center items-center">
              <div className="relative w-full h-full">
                <div className="w-32 h-32 absolute mx-auto my-auto top-0 bottom-0 left-20 z-10 shrink-0 md:w-36 md:h-36">
                  <img
                    src={tracks[1].album.images[1].url}
                    alt={tracks[1].name}
                    className="rounded-lg shadow-2xl w-32 h-32 md:w-36 md:h-36"
                  />
                </div>
                <div className="w-40 h-40 absolute inset-0 my-auto mx-auto shrink-0 z-20 md:w-52 md:h-52">
                  <img
                    src={tracks[0].album.images[1].url}
                    alt={tracks[0].name}
                    className="rounded-lg shadow-2xl w-40 h-40 md:w-52 md:h-52"
                  />
                </div>
                <div className="w-32 h-32 absolute mx-auto my-auto top-0 bottom-0 right-20 z-10 shrink-0 md:w-36 md:h-36">
                  <img
                    src={tracks[2].album.images[1].url}
                    alt={tracks[2].name}
                    className="rounded-lg shadow-2xl w-32 h-32 md:w-36 md:h-36"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <TopItemsSkeleton />
      )}
    </div>
  );
};

export default TopTracks;
