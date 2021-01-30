import React from "react";
import Hero from "./Hero";
import FollowMe from "./FollowMe";
import FeaturedSongList from "./FeaturedSongList";
import LatestNews from "./LatestNews";
import Bio from "./Bio";
import Contact from "./Contact";
import "../styles.css";

const App = () => {
  return (
    <div>
      <Hero id="HOME" />
      <FollowMe />
      <FeaturedSongList id="MUSIC" />
      <LatestNews id="NEWS" />
      <Bio />
      <Contact id="section1" />
    </div>
  );
};

export default App;
