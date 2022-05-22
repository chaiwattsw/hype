import React, { ReactNode } from "react";

interface TopArtistItemsProps {
  artistIdx: number;
  img: string;
  name: string;
  href: string;
  children?: ReactNode;
}

const TopArtistItems: React.FC<TopArtistItemsProps> = ({
  name,
  img,
  href,
  artistIdx,
}) => {
  return (
    <div className="w-full md:w-1/2">
      <div className="flex flex-col gap-6">
        <div className="flex items-center">
          <div className="w-10 text-left">
            <span className="font-semibold">#{artistIdx + 1}</span>
          </div>
          <a href={href} target="_blank" rel="noreferrer">
            <img src={img} alt={name} className="rounded-full h-16 w-16 mr-4" />
          </a>
          <span className="text-left flex">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="hover:underline font-bold text-white"
            >
              {name}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopArtistItems;
