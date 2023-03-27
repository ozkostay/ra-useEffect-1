import React from 'react';
import './List.css';
import ListItem from './ListItem';

export default function List({list}) {

  console.log(list);

  return <div className='wrapp-list'>
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
  </div>
}