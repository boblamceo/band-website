import React from 'react';
import FeaturedSong from './FeaturedSong';

const FeaturedSongList = () => {
  return (
    <div className='featured-song-list'>
      <FeaturedSong songTitle='Set the World on Fire' />
      <FeaturedSong songTitle='Haunted' />
      <FeaturedSong songTitle='Call My Name' />
    </div>
  );
};

export default FeaturedSongList;
