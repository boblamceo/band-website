import React from 'react';
import FeaturedSong from './FeaturedSong';

const FeaturedSongList = () => {
  return (
    <div className='featured-song-list'>
      <FeaturedSong
        songTitle='Set the World on Fire'
        releaseDate='1st July 2019'
        theme='black'
        image={require('../images/set-the-world-on-fire-cover.png')}
      />
      <FeaturedSong
        songTitle='Haunted'
        releaseDate='1st July 2019'
        theme='white'
        image={require('../images/haunted-cover.png')}
      />
      <FeaturedSong
        songTitle='Call My Name'
        releaseDate='1st July 2019'
        theme='black'
        image={require('../images/call-my-name-cover.jpg')}
      />
    </div>
  );
};

export default FeaturedSongList;
