import React from 'react';

export default function Name ({name}) {
  
  console.log('Name ', name);
  
  return <div className='detail-name'>
    {name}
  </div>
}
