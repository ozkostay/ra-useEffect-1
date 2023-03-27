import React from 'react';
import './Details.css';
import Avatar from './Avatar';
import Name from './Name';
import City from './City';
import Company from './Company';
import Position from './Position';

export default function Details () {
  const itemTest = {
    'id': 4,
    'name': 'Kelvin Harvey',
    'avatar': 'https://i.pravatar.cc/300',
    'details': {
        'city': 'West Danyka',
        'company': 'Leuschke and Sons',
        'position': 'Direct Communications Director'
    }
  }

  const {avatar, name, city, company, position} = itemTest;
  
  return <div className='wrapp-details'>
    <Avatar avatar={avatar}/>
    <Name name={name}/>
    <City city={city}/>
    <Company company={company}/>
    <Position position={position}/>
  </div>
}