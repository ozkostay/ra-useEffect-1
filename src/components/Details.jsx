import React from 'react';
import './Details.css';
import Avatar from './Avatar';
import Name from './Name';
import City from './City';
import Company from './Company';
import Position from './Position';

export default function Details ({item}) {

  // console.log('+++', item);
  if (!item) {
    return;
  }

  return (
    
    <div className='wrapp-details'>
      <Avatar avatar={item.avatar}/>
      <Name name={item.name}/>
      <City city={item.details.city}/>
      <Company company={item.details.company}/>
      <Position position={item.details.position}/>
    </div>
  )
}
