import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../common/Item';

const Store = () => {
    const [filter, setFilter] = useState(false);
    const [sortBy, setSortBy] = useState('popular');
    const [filterCategory, setFilterCategory] = useState(['portraits', 'sport', 'nature', 'architecture', 'street', 'aerial', 'astro']);
    const [filterFinish, setFilterFinish] = useState(['glossy', 'matte', 'satin', 'metallic']);
    const [items, setItems] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState(12);
    let filteredItems = [];

    // get all items from DB (local file atm)
    useEffect(() => {
        axios.get('/api/data').then( response => {
            setItems(response.data.items);
        });
    }, []);

    // filter by most selling by default
    items.sort((a,b) => a.sold > b.sold ? -1 : 1);
    // push items to filtered array based on how many items customer wants to view at a time
    filteredItems = items.slice(0, numberOfItems);

    const loadMoreItems = () => {
        const previousItems = numberOfItems;
        setNumberOfItems(previousItems + 12);
    };

    const toggleFilter = () => {
        const filterContainer = document.getElementById('filter');
        if (!filter) {
            setFilter(true);
            filterContainer.style.transform = 'translateX(0%)';
            filterContainer.style.transition = 'all 1s';
        } else {
            setFilter(false);
            filterContainer.style.transform = 'translateX(Calc(-100% - 10px))';
            filterContainer.style.transition = 'all 1s';
        }
    };

    const updateFilterCategory = (field) => {
        let category = field;
        if (filterCategory.indexOf(category) >= 0) {
            // delete category from array
            setFilterCategory(filterCategory.filter( (i) => (i !== category) ));
        } else {
            setFilterCategory([...filterCategory, category]);
        }
    };

    const updateFilterFinish = (field) => {
        let finish = field;
        if (filterFinish.indexOf(finish) >= 0) {
            // delete finish from array
            setFilterFinish(filterFinish.filter( (i) => (i !== finish) ));
        } else {
            setFilterFinish([...filterFinish, finish]);
        }
    };

 
    return (
        <div className="container">
            {filteredItems.map((item) => (
                <Item data={item} key={item.id} />
            ))}
            <div className="button" id="load_more_items" onClick={ loadMoreItems }>
                LOAD MORE PRODUCTS
            </div>
            <div id="filter">
                <div id="filter_button" onClick={ toggleFilter }>
                    <img src="/img/logo/filter_white.svg" alt="filter logo" />
                </div>
                <h2>Sort Art By:</h2>
                <div>
                    <input 
                        type="radio" 
                        name="sort_products" 
                        value="popular"
                        checked={ sortBy === 'popular' ? true : false }
                        onChange={ () => setSortBy('popular') }  
                    /> Most popular <br />
                    <input 
                        type="radio" 
                        name="sort_products" 
                        value="cheap"
                        checked={ sortBy === 'cheap' ? true : false }
                        onChange={ () => setSortBy('cheap') } 
                    /> Prize &uarr; <br />
                    <input 
                        type="radio" 
                        name="sort_products" 
                        value="expensive"
                        checked={ sortBy === 'expensive' ? true : false }
                        onChange={ () => setSortBy('expensive') } 
                    /> Prize &darr; <br />
                </div>
                <h2>Filter Art By:</h2>
                <div>
                    <h3>Category</h3>
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="portraits"
                        onChange={ () => updateFilterCategory('portraits') }
                        checked={ filterCategory.indexOf('portraits') !== -1 ? true : false } 
                    /> portraits <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="sport"
                        onChange={ () => updateFilterCategory('sport') }
                        checked={ filterCategory.indexOf('sport') !== -1 ? true : false } 
                    /> sport <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="nature"
                        onChange={ () => updateFilterCategory('nature') }
                        checked={ filterCategory.indexOf('nature') !== -1 ? true : false }  
                    /> nature <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="architecture"
                        onChange={ () => updateFilterCategory('architecture') }
                        checked={ filterCategory.indexOf('architecture') !== -1 ? true : false } 
                    /> architecture <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="street"
                        onChange={ () => updateFilterCategory('street') }
                        checked={ filterCategory.indexOf('street') !== -1 ? true : false }  
                    /> street <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="aerial"
                        onChange={ () => updateFilterCategory('aerial') }
                        checked={ filterCategory.indexOf('aerial') !== -1 ? true : false } 
                    /> aerial <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="astrophotography"
                        onChange={ () => updateFilterCategory('astro') }
                        checked={ filterCategory.indexOf('astro') !== -1 ? true : false } 
                    /> astrophotography <br />
                </div>
                <div>
                    <h3>Finish</h3>
                    <input 
                        type="checkbox" 
                        name="finish" 
                        value="glossy"
                        onChange={ () => updateFilterFinish('glossy') }
                        checked={ filterFinish.indexOf('glossy') !== -1 ? true : false } 
                    /> glossy <br />
                    <input 
                        type="checkbox" 
                        name="finish" 
                        value="matte"
                        onChange={ () => updateFilterFinish('matte') }
                        checked={ filterFinish.indexOf('matte') !== -1 ? true : false } 
                    /> matte <br />
                    <input 
                        type="checkbox" 
                        name="finish" 
                        value="satin"
                        onChange={ () => updateFilterFinish('satin') }
                        checked={ filterFinish.indexOf('satin') !== -1 ? true : false } 
                    /> satin <br />
                    <input 
                        type="checkbox" 
                        name="finish" 
                        value="metallic"
                        onChange={ () => updateFilterFinish('metallic') }
                        checked={ filterFinish.indexOf('metallic') !== -1 ? true : false } 
                    /> metallic <br />
                </div> 
            </div> 
        </div>
    )
   
}

export default Store;