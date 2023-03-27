import React, { useEffect, useState } from 'react';
import './App.css'
import List from './components/List';
import Details from './components/Details'

export default function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState(null);
    const listURL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
    
    useEffect(() => {
        fetch(listURL)
            .then((response) => response.json())
            .then((json) => setList(json))
    }, [])

    function fnSelectItem(item) {
        // console.log('===', item);
        setItem(null);
        const DetailsURL = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${item.id}.json`;
        fetch(DetailsURL)
        .then((response) => response.json())
        .then((json) => setItem(json))
        .catch(
          console.log('ERROR')
        )
        .finally(() => console.log("All done"));
    }

    return (
        <div className='wrapper'>
            <List list={list} fnSelectItem={fnSelectItem}/>
            <Details item={item}/>
        </div>
    );
}
