import React from 'react';

const FollowMe = () => {
  return (
    <div className='site-section-white'>
      <div className='section-container'>
        <h2 className='follow-me'>
          Follow me on <span className='spotify-green'> Spotify</span>
        </h2>
        <div className='spotify-item'>
          <iframe
            className='spotify-frame'
            src='https://open.spotify.com/follow/1/?uri=spotify:artist:3sS1ofnjxVvkF6p2TeDKnD?si=P5_SzBgVTzWj6J6ndYfhOw&amp;size=detail&amp;theme=light'
            scrolling='no'
            frameborder='0'
            allowtransparency='true'
          />
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
