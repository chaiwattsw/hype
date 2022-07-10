interface ArtistLinkProps {
  name: string;
  href: string;
}

const ArtistLink = ({ name, href }: ArtistLinkProps) => {
  return (
    <a className="hover:underline" href={href} target="_blank" rel="noreferrer">
      {name}
    </a>
  );
};

export default ArtistLink;
