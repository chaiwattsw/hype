import React from "react";
import ShareTopArtists from "../Share/ShareTopArtists";

const TopArtistItems = ({ data, duration }) => {
  return (
    <>
      <ShareTopArtists data={data} duration={duration} />
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-6">
            {data?.items?.map((item, idx) => (
              <div key={item.id} className="flex items-center">
                <div className="w-10 text-left">
                  <span className="font-semibold">#{idx + 1}</span>
                </div>
                <img
                  src={item?.images[1]?.url}
                  alt={item?.name}
                  className="rounded-full h-16 w-16 mr-4"
                />
                <span className="text-left flex">
                  <a
                    href={item?.external_urls?.spotify}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline font-bold text-white"
                  >
                    {item?.name}
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 my-auto">
          <div className="max-w-xl my-6 relative h-52 md:h-80 mx-auto md:max-w-sm">
            <div className="w-32 h-32 absolute left-5 md:left-0 top-5 md:top-10 z-10 shrink-0 md:w-36 md:h-36">
              <img
                src={data?.items[1]?.images[1]?.url}
                alt={data?.items[1]?.name}
                className="rounded-full w-32 h-32 shadow-2xl md:w-36 md:h-36"
              />
            </div>
            <div className="w-40 h-40 absolute left-0 right-0 z-20 top-0 mx-auto shrink-0 md:w-52 md:h-52">
              <img
                src={data?.items[0]?.images[1]?.url}
                alt={data?.items[0]?.name}
                className="rounded-full w-40 h-40 shadow-2xl md:w-52 md:h-52"
              />
            </div>
            <div className="w-32 h-32 absolute right-5 md:right-0 top-5 md:top-10 z-10 shrink-0 md:w-36 md:h-36">
              <img
                src={data?.items[2]?.images[1]?.url}
                alt={data?.items[2]?.name}
                className="rounded-full w-32 h-32 shadow-2xl md:w-36 md:h-36"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopArtistItems;
