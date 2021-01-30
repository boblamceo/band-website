import React from "react";
import FeaturedSong from "./FeaturedSong";

const FeaturedSongList = () => {
  return (
    <div className="featured-song-list">
      <FeaturedSong
        songTitle="ABC"
        releaseDate="30th January 2021"
        theme="black"
        image={require("../images/empty.jpeg")}
      />
      <FeaturedSong
        songTitle="Ba ba black sheep"
        releaseDate="30th January 2021"
        theme="white"
        image={require("../images/empty.jpeg")}
      />
      <FeaturedSong
        songTitle="Twinkle twinkle little star"
        releaseDate="30th January 2021"
        theme="black"
        image={require("../images/empty.jpeg")}
      />
    </div>
  );
};

export default FeaturedSongList;
