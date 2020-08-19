import React from 'react';

const NewsPost = ({ date, title, post, image }) => {
  return (
    <div>
      <h3 className='heading'>{date}</h3>
      <h3 className='data'>{title}</h3>
      <p>{post}</p>
      <img src={image} />
    </div>
  );
};

export default NewsPost;
