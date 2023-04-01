import React from 'react';
import './Avatar.css';

export default function Avatar ({avatar}) {
  
  // const avatar2 = 'https://i.pravatar.cc/3' + Math.round((Math.random() * 100));

  // console.log('avatar2', avatar2)
  var avatarStyle = {
    backgroundImage: `url(${avatar})`
  };

  return <div className='pic' style={avatarStyle}></div>
}
