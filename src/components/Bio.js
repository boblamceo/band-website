import React from 'react';

const Bio = () => {
  return (
    <div className='site-section-black'>
      <div className='section-container'>
        <h2>Bio</h2>
        <div className='bio'>
          <p>
            Keepers of the Garden is the artist name for Bristol UK based singer/songwriting and
            musician Andrew Bingham.
            <br />
            <br />
            The journey started with a passion for producing electronic dance music, which later
            evolved into an alternative blues, rock style. The rock element was heavily influenced
            by artists such as The Black Keys, Hanni El Khatib, Kasabian, Incubus, Gomez and The
            Bluetones.
            <br />
            <br />
            Follow me on Spotify to be notified as soon a the new single ‘Give a Little Love’ gets
            released later this year
          </p>
          <img src={require('../images/bio-photo.jpg')} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Bio;
