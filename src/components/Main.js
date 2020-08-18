import React from 'react';
import TopMenu from './TopMenu';
import Hero from './Hero';
import FollowMe from './FollowMe';
import FeaturedSongList from './FeaturedSongList';

const Main = () => {
  return (
    <div id='main'>
      <TopMenu />
      <Hero />
      <FollowMe />
      <FeaturedSongList />
    </div>
  );
};

export default Main;
