import ArtistLink from "../ArtistLink";

interface TopTrackItemsProps {
  trackIdx: number;
  name: string;
  href: string;
  img: string;
  artists: { id: string; name: string; external_urls: { spotify: string } }[];
}

const TopTrackItems = ({
  name,
  href,
  img,
  artists,
  trackIdx,
}: TopTrackItemsProps) => {
  return (
    <div className="flex flex-row items-center justify-start gap-6">
      <span className="font-semibold w-3">#{trackIdx + 1}</span>
      <a href={href} target="_blank" rel="noreferrer">
        <img src={img} alt={name} className="h-16 w-16" />
      </a>
      <div className="w-1/2 text-left">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-white hover:underline"
        >
          {name}
        </a>
        <div className="font-semibold text-gray-200">
          {artists.map((artist, artistIdx) => {
            if (artists.length === 1 || artists.length - 1 === artistIdx) {
              return (
                <ArtistLink
                  key={artist.id}
                  name={artist.name}
                  href={artist.external_urls.spotify}
                />
              );
            }
            return (
              <ArtistLink
                key={artist.id}
                name={`${artist.name}, `}
                href={artist.external_urls.spotify}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopTrackItems;
