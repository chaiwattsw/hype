import { useState } from "react";
import { useTopArtists } from "hooks";
import ShareTopArtists from "../Share/ShareTopArtists";
import TopItemsContainer from "../TopItemsContainer";
import TopItemsSkeleton from "../TopItemsSkeleton";
import TopArtistItems from "./TopArtistItems";

const TopArtists = () => {
  const [duration, setDuration] = useState("short_term");
  const { data: artists, isLoading } = useTopArtists(duration, "10");

  return (
    <TopItemsContainer
      title="Top Artists"
      duration={duration}
      setDuration={setDuration}
    >
      {!isLoading && artists ? (
        <>
          <ShareTopArtists artists={artists} duration={duration} />
          <div className="flex flex-row">
            <div className="flex flex-col w-full md:w-1/2 gap-6">
              {artists.map((artist, artistIdx) => (
                <TopArtistItems
                  artistIdx={artistIdx}
                  key={artist.id}
                  img={artist.images[1].url}
                  name={artist.name}
                  href={artist.external_urls.spotify}
                />
              ))}
            </div>
            <div className="hidden md:flex flex-col w-1/2 justify-center items-center">
              <div className="relative w-full h-full">
                <div className="w-32 h-32 absolute top-0 bottom-0 left-20 mx-auto my-auto z-10 shrink-0 md:w-36 md:h-36">
                  <img
                    src={artists[1].images[1].url}
                    alt={artists[1].name}
                    className="rounded-full w-32 h-32 shadow-2xl md:w-36 md:h-36"
                  />
                </div>

                <div className="w-40 h-40 absolute inset-0 mx-auto my-auto z-20 shrink-0 md:w-52 md:h-52">
                  <img
                    src={artists[0].images[1].url}
                    alt={artists[0].name}
                    className="rounded-full w-40 h-40 shadow-2xl md:w-52 md:h-52"
                  />
                </div>

                <div className="w-32 h-32 absolute top-0 bottom-0 right-20 mx-auto my-auto z-10 shrink-0 md:w-36 md:h-36">
                  <img
                    src={artists[2].images[1].url}
                    alt={artists[2].name}
                    className="rounded-full w-32 h-32 shadow-2xl md:w-36 md:h-36"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <TopItemsSkeleton rounded />
      )}
    </TopItemsContainer>
  );
};

export default TopArtists;
