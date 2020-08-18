import React from 'react';

const FeaturedSong = ({ songTitle }) => {
  return (
    <div className='featured-song'>
      <h2>{songTitle}</h2>
    </div>
  );
};

export default FeaturedSong;
