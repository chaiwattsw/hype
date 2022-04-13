import React from "react";
import { useSpotify } from "../../hooks/useSpotify";
import TopItemsSkeleton from "../TopItemsSkeleton";

const TopTracks = ({ duration, limit }) => {
  const { data, error } = useSpotify(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${duration}&limit=${limit}`
  );

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="w-full">
      <div className="flex gap-6 my-8">
        <h1 className="text-5xl font-bold text-white text-left">Top Tracks</h1>
        <div className="flex items-end">
          <button className="leading-none bg-green-500 hover:bg-green-600 rounded-2xl text-white px-8 py-2">
            Share
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row m-6 md:m-0">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-6">
            {data ? (
              data.items.map((item) => (
                <div key={item.id} className="flex items-center">
                  <img
                    src={item.album.images[1].url}
                    alt={item.name}
                    className="h-16 w-16 mr-4"
                  />
                  <div className="block text-left">
                    <p className="font-bold text-white mr-4">{item.name}</p>
                    <p className="font-semibold text-gray-400">
                      {item.artists[0].name}
                      {item.artists[1]?.name && `, ${item.artists[1].name}`}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <TopItemsSkeleton />
            )}
          </div>
        </div>
        {data ? (
          <div className="w-full md:w-1/2 my-auto">
            <div className="max-w-xl my-6 relative h-80 mx-auto md:max-w-sm">
              <div className="w-64 h-64 absolute left-0 top-10 z-10 shrink-0 md:w-36 md:h-36">
                <img
                  src={data.items[1].album.images[1].url}
                  alt={data.items[1].name}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="w-80 h-80 absolute left-0 right-0 z-20 top-0 mx-auto shrink-0 md:w-52 md:h-52">
                <img
                  src={data.items[0].album.images[1].url}
                  alt={data.items[0].name}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="w-64 h-64 absolute right-0 top-10 z-10 shrink-0 md:w-36 md:h-36">
                <img
                  src={data.items[2].album.images[1].url}
                  alt={data.items[2].name}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TopTracks;
