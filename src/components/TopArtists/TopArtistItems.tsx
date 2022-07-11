interface TopArtistItemsProps {
  artistIdx: number;
  img: string;
  name: string;
  href: string;
}

const TopArtistItems = ({
  name,
  img,
  href,
  artistIdx,
}: TopArtistItemsProps) => {
  return (
    <div className="flex flex-row justify-start items-center gap-6">
      <span className="font-semibold w-3">#{artistIdx + 1}</span>
      <a href={href} target="_blank" rel="noreferrer">
        <img src={img} alt={name} className="rounded-full h-16 w-16" />
      </a>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="hover:underline font-bold text-white"
      >
        {name}
      </a>
    </div>
  );
};

export default TopArtistItems;
