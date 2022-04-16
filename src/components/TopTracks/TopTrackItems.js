import React from "react";

const TopTrackItems = ({ data }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-6">
          {data.items.map((item) => (
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
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 my-auto">
        <div className="max-w-xl my-6 relative h-80 mx-auto md:max-w-sm">
          <div className="w-32 h-32 absolute left-0 top-10 z-10 shrink-0 md:w-36 md:h-36">
            <img
              src={data.items[1].album.images[1].url}
              alt={data.items[1].name}
              className="rounded-lg shadow-xl w-32 h-32 md:w-36 md:h-36"
            />
          </div>
          <div className="w-40 h-40 absolute left-0 right-0 z-20 top-0 mx-auto shrink-0 md:w-52 md:h-52">
            <img
              src={data.items[0].album.images[1].url}
              alt={data.items[0].name}
              className="rounded-lg shadow-xl w-40 h-40 md:w-52 md:h-52"
            />
          </div>
          <div className="w-32 h-32 absolute right-0 top-10 z-10 shrink-0 md:w-36 md:h-36">
            <img
              src={data.items[2].album.images[1].url}
              alt={data.items[2].name}
              className="rounded-lg shadow-xl w-32 h-32 md:w-36 md:h-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTrackItems;
