import React from "react";

interface ArtistLinkProps {
  name: string;
  href: string;
}

const ArtistLink: React.FC<ArtistLinkProps> = ({ name, href }) => {
  return (
    <a className="hover:underline" href={href} target="_blank" rel="noreferrer">
      {name}
    </a>
  );
};

export default ArtistLink;
