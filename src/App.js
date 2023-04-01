import React, { useEffect, useState } from 'react';
import './App.css'
import List from './components/List';
import Details from './components/Details'

export default function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const listURL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';
    
    // console.log('APP');
    useEffect(() => {
        fetch(listURL)
            .then((response) => response.json())
            .then((json) => setList(json))
            .catch(
              console.log('Ошибка загрузки List')
            )
            .finally(() => setIsLoading(false));
    }, [])

    function fnSelectItem(item) {
        // console.log('===', item);
        // setItem(null);
        const DetailsURL = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${item.id}.json`;
        fetch(DetailsURL)
        .then((response) => response.json())
        .then((json) => setItem(json))
        .catch(
          console.log('Ошибка загрузки Details')
        )
        .finally(() => console.log('Details done'));
    }

    // console.log('ISLOADING');
    if (isLoading) {
        return <h1>... Loading</h1>
    }

    return (
        <div className='wrapper'>

            <List list={list} fnSelectItem={fnSelectItem}/>
            <Details item={item}/>
        </div>
    );
}
