import React from 'react';
import './List.css';
import ListItem from './ListItem';

export default function List({list, fnSelectItem}) {
  // console.log('in List', list);
  
  return <div className='wrapp-list'>
    {list.map((item) => <ListItem key={item.id} item={item} fnSelectItem={fnSelectItem} />)}
  </div>
}
