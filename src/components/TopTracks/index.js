import React from "react";

const TopTracks = ({ data }) => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold my-8 text-white">Top Tracks</h1>
      <div className="flex flex-col-reverse md:flex-row m-6">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-6">
            {data.map((item) => (
              <div key={item.id} className="flex items-center">
                <img
                  src={item.album?.images[1]?.url}
                  alt={item.name}
                  className="rounded-md h-16 w-16 mr-4"
                />
                <span className="text-left flex">
                  <span className="font-bold text-white mr-4">{item.name}</span>
                  <span className="font-semibold text-gray-400">
                    {item.artists[0].name}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="max-w-xl my-6 relative h-80 mx-auto md:max-w-sm">
            <div className="w-64 h-64 absolute left-0 top-10 z-10 shrink-0 md:w-36 md:h-36">
              <img
                src={data[0]?.album?.images[1]?.url}
                alt={data[0]?.name}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="w-80 h-80 absolute left-0 right-0 z-20 top-0 mx-auto shrink-0 md:w-52 md:h-52">
              <img
                src={data[1]?.album?.images[1]?.url}
                alt={data[1]?.name}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="w-64 h-64 absolute right-0 top-10 z-10 shrink-0 md:w-36 md:h-36">
              <img
                src={data[2]?.album?.images[1]?.url}
                alt={data[2]?.name}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTracks;
