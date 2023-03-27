import React, { useState } from 'react';
import './App.css'
import List from './components/List';
import Details from './components/Details'

export default function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState({});

    return (
        <div className='wrapper'>
            <List list={list} />
            <Details info={item}/>
        </div>
    );
}
