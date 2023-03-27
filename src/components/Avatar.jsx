import React from 'react';
import './Avatar.css';

export default function Avatar ({avatar}) {
  
  var avatarStyle = {
    backgroundImage: `url(${avatar})`
  };

  return <div className='pic' style={avatarStyle}></div>
}
