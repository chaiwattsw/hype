import React from "react";

const TopArtistItems = ({ data }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-6">
          {data.items.map((item) => (
            <div key={item.id} className="flex items-center">
              <img
                src={item.images[1].url}
                alt={item.name}
                className="rounded-full h-16 w-16 mr-4"
              />
              <span className="text-left flex">
                <span className="font-bold text-white mr-4">{item.name}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 my-auto">
        <div className="max-w-xl my-6 relative h-80 mx-auto md:max-w-sm">
          <div className="w-64 h-64 absolute left-0 top-10 z-10 shrink-0 md:w-36 md:h-36">
            <img
              src={data.items[1].images[1].url}
              alt={data.items[1].name}
              className="rounded-full w-64 h-64 shadow-xl md:w-36 md:h-36"
            />
          </div>
          <div className="w-80 h-80 absolute left-0 right-0 z-20 top-0 mx-auto shrink-0 md:w-52 md:h-52">
            <img
              src={data.items[0].images[1].url}
              alt={data.items[0].name}
              className="rounded-full w-80 h-80 shadow-xl md:w-52 md:h-52"
            />
          </div>
          <div className="w-64 h-64 absolute right-0 top-10 z-10 shrink-0 md:w-36 md:h-36">
            <img
              src={data.items[2].images[1].url}
              alt={data.items[2].name}
              className="rounded-full w-64 h-64 shadow-xl md:w-36 md:h-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtistItems;
