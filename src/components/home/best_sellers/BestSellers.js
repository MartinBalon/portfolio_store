import React from 'react';
import Item from '../../common/Item';
import Items from '../../common/items';

let filtredData = [];

const sortData = () => {
    const windowWidth = window.innerWidth;
    let itemsToShow;

    if (windowWidth <= 450) {
        itemsToShow = 4;
    } else if (windowWidth > 450 && windowWidth <= 1366) {
        itemsToShow = 6;
    } else {
        itemsToShow = 9;
    }

    const data = Items; 
    // sort data base on sold items to determine bestsellers
    data.sort((a,b) => a.sold > b.sold ? -1 : 1)
    // show only X amount on each type of user device
    filtredData = data.slice(0, itemsToShow);
}

sortData();

const BestSellers = () => {
    return (
        <section id="best_sellers">
            <h1>Best Sellers</h1>
            {filtredData.map((item) => (
                <Item data={item} key={item.id} />
            ))}
            
            
        </section>
    )
};

export default BestSellers;