import React from "react";

interface TopTrackItemsProps {
  trackIdx: number;
  name: string;
  href: string;
  img: string;
  artists: { id: string; name: string; external_urls: { spotify: string } }[];
}

const TopTrackItems: React.FC<TopTrackItemsProps> = ({
  name,
  href,
  img,
  artists,
  trackIdx,
}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-6">
          <div className="flex items-center">
            <div className="w-10 text-left">
              <span className="font-semibold">#{trackIdx + 1}</span>
            </div>
            <a href={href} target="_blank" rel="noreferrer">
              <img src={img} alt={name} className="h-16 w-16 mr-4" />
            </a>
            <div className="block text-left">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-white hover:underline"
              >
                {name}
              </a>
              <div className="font-semibold text-gray-200">
                {artists.map((artist, artistIdx) => (
                  <a
                    key={artist?.id}
                    target="_blank"
                    className="hover:underline"
                    href={artist?.external_urls?.spotify}
                    rel="noreferrer"
                  >
                    {artists.length === 1 || artists.length - 1 === artistIdx
                      ? artist.name
                      : artist.name + ", "}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full md:w-1/2 my-auto">
        <div className="max-w-xl my-6 relative h-52 md:h-80 mx-auto md:max-w-sm">
          <div className="w-32 h-32 absolute left-5 md:left-0 top-10 z-10 shrink-0 md:w-36 md:h-36">
            <img
              src={tracks[1]?.album?.images[1]?.url}
              alt={tracks[1].name}
              className="rounded-lg shadow-2xl w-32 h-32 md:w-36 md:h-36"
            />
          </div>
          <div className="w-40 h-40 absolute left-0 right-0 z-20 top-5 md:top-0 mx-auto shrink-0 md:w-52 md:h-52">
            <img
              src={tracks[0]?.album?.images[1]?.url}
              alt={tracks[0]?.name}
              className="rounded-lg shadow-2xl w-40 h-40 md:w-52 md:h-52"
            />
          </div>
          <div className="w-32 h-32 absolute right-5 md:right-0 top-10 z-10 shrink-0 md:w-36 md:h-36">
            <img
              src={tracks[2]?.album?.images[1]?.url}
              alt={tracks[2]?.name}
              className="rounded-lg shadow-2xl w-32 h-32 md:w-36 md:h-36"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TopTrackItems;
