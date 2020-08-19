import React from 'react';
import TopMenu from './TopMenu';
import Hero from './Hero';
import FollowMe from './FollowMe';
import FeaturedSongList from './FeaturedSongList';
import LatestNews from './LatestNews';
import Bio from './Bio';
import Contact from './Contact';

const Main = () => {
  return (
    <div id='main'>
      <TopMenu />
      <Hero />
      <FollowMe />
      <FeaturedSongList />
      <LatestNews />
      <Bio />
      <Contact />
    </div>
  );
};

export default Main;
