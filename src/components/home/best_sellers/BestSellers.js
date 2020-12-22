import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../../common/Item';

const BestSellers = () => {
    const [items, setItems] = useState([]);
    let filteredItems = [];
    // get users window width and decide how many bestsellers to show
    const windowWidth = window.innerWidth;
    let itemsToShow;
    if (windowWidth <= 450) {
        itemsToShow = 4;
    } else if (windowWidth > 450 && windowWidth <= 1366) {
        itemsToShow = 6;
    } else {
        itemsToShow = 9;
    }

    // get all items from DB (local file atm)
    useEffect(() => {
        axios.get('/api/data').then( response => {
            setItems(response.data.items);
        });
    }, []);

    // filter by most selling by default
    items.sort((a,b) => a.sold > b.sold ? -1 : 1);
    // push items to filtered array based on how many items customer wants to view at a time
    filteredItems = items.slice(0, itemsToShow);
  
    return (
        <section id="best_sellers">
            <h1>Best Sellers</h1>
            {filteredItems.map((item) => (
                <Item data={item} key={item.id} />
            ))} 
        </section>
    )
};

export default BestSellers;