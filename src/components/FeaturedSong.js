import React from 'react';

const FeaturedSong = ({ songTitle, releaseDate, theme, image }) => {
  return (
    <div className={`featured-song ${theme}`}>
      <div className='song-container'>
        <div className='song-image'>
          <img src={image} />
        </div>
        <div className='song-data'>
          <h3 className='heading'>Title</h3>
          <h3 className='data'>{songTitle}</h3>
          <br />
          <h3 className='heading'>Release date</h3>
          <h3 className='data'>{releaseDate}</h3>
          <br />
          <h3 className='heading'>Play this song on</h3>
          <button>Spotify</button>
          <button>Apple Music</button>
          <button>YouTube</button>
          <br />
          <br />
          <h3 className='heading'>Buy this song on</h3>
          <button>Amazon</button>
          <button>Google Play Music</button>
          <button>CD Baby</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSong;
