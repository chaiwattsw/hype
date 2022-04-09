import React from "react";

const TopTracks = ({ data }) => {
  return (
    <div>
      <h1 className="text-4xl text-white">Top Tracks</h1>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.album?.images[1]?.url} alt={item.name} />
            <p>
              {item.name} - {item.artists[0].name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTracks;
