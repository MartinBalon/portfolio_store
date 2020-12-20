import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../common/Item';

const Store = () => {
    const [items, setItems] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState(12);
    let filteredItems = [];

    // get all items from DB (local file atm)
    useEffect(() => {
        axios.get('/api/items').then( response => {
            setItems(response.data);
        });
    });

    // filter by most selling by default
    items.sort((a,b) => a.sold > b.sold ? -1 : 1);
    // push items to filtered array based on how many items customer wants to view at a time
    filteredItems = items.slice(0, numberOfItems);

    const loadMoreItems = () => {
        const previousItems = numberOfItems;
        setNumberOfItems(previousItems + 12);
    };
    
    return (
        <div className="container">
            {filteredItems.map((item) => (
                <Item data={item} key={item.id} />
            ))}
            <div className="button load_more_button" onClick={ loadMoreItems }>
                LOAD MORE
            </div>
        </div>
    )
   
}

export default Store;