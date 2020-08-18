import React from 'react';

const FollowMe = () => {
  return (
    <div className='follow-me'>
      <h2>
        Follow me on <span> Spotify</span>
      </h2>
      <div className='item'>
        <iframe
          className='spotify-frame'
          src='https://open.spotify.com/follow/1/?uri=spotify:artist:3sS1ofnjxVvkF6p2TeDKnD?si=P5_SzBgVTzWj6J6ndYfhOw&amp;size=detail&amp;theme=light'
          scrolling='no'
          frameborder='0'
          allowtransparency='true'
        ></iframe>
      </div>
    </div>
  );
};

export default FollowMe;
