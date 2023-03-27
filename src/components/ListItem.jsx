import React from 'react';
import './ListItem.css';

export default function ListItem ({item, fnSelectItem}) {
  
  const {name} = item;
  
  return <div className='listItem' onClick={() => fnSelectItem(item)}>
    {name}
  </div>
}
