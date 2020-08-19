import React from 'react';

import TopMenuLink from './TopMenuLink';

const TopMenu = () => {
  return (
    <div className='top-menu-container'>
      <div className='top-menu'>
        <TopMenuLink text='HOME' />
        <TopMenuLink text='MUSIC' />
        <TopMenuLink text='NEWS' />
        <TopMenuLink text='BIO' />
        <TopMenuLink text='CONTACT' />
      </div>
    </div>
  );
};

export default TopMenu;
