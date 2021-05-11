import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../common/Item';

const Store = () => {
    const [filter, setFilter] = useState(false);
    const [sortBy, setSortBy] = useState('popular');
    const [filterCategory, setFilterCategory] = useState(['portraits', 'sport', 'nature', 'architecture', 'street', 'aerial', 'astro']);
    const [filterFinish, setFilterFinish] = useState(['glossy', 'matte', 'satin', 'metallic']);
    const [filterFormat, setFilterFormat] = useState(['landscape', 'portrait']);
    const [items, setItems] = useState([]);
    const [numberOfItems, setNumberOfItems] = useState(12);
    let itemsToShow = [];

    // get all items from DB (local file atm)
    useEffect(() => {
        axios.get('/api/data').then( response => {
            setItems(response.data.items);
        });
    }, []);

    // scroll to top of the page 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // new instance of received data
    let filteredItems = items;

    // sort by most selling - (default option)
    if (sortBy === 'popular') {
        filteredItems.sort((a,b) => a.sold > b.sold ? -1 : 1);
    } else if (sortBy === 'cheap') {
        filteredItems.sort((a,b) => a.pricing[0] < b.pricing[0] ? -1 : 1);
    } else if (sortBy === 'expensive') {
        filteredItems.sort((a,b) => a.pricing[0] > b.pricing[0] ? -1 : 1);
    }
    // filter products by category
    let filteredByCategory = [];
    // loop through each product
    for (let product = 0; product < filteredItems.length; product++) {
        // loop through filtered category
        for (let category = 0; category < filterCategory.length; category++) {
            // loop through the tags and match them with selected categories
            for (let tag = 0; tag < filteredItems[product].tags.length; tag++) {
                if (filterCategory[category] === filteredItems[product].tags[tag]) {
                    filteredByCategory.push(filteredItems[product]);
                }
            }
        }  
    }
    // filter products by finish
    let filteredByFinish = [];
    // loop through the products
    for (let product = 0; product < filteredByCategory.length; product++) {
        // loop through the selected finish
        for (let finish = 0; finish < filterFinish.length; finish++) {
            // loop through products available finish
            for (
                let productFinish = 0; 
                productFinish < filteredByCategory[product].finish.length; 
                productFinish++
                ) {
                if (filteredByCategory[product].finish[productFinish] === filterFinish[finish]) {
                    filteredByFinish.push(filteredByCategory[product]);
                }
            }
        }
    }
    // filter products by format (orientation) 
    // we have only two formats so won't be looping through the format array
    let filteredByFormat = [];
    if (filterFormat.length === 1) {
        for (let product = 0; product < filteredByFinish.length; product++) {
            if (filteredByFinish[product].format === filterFormat[0]) {
                filteredByFormat.push(filteredByFinish[product]);
            }
        }
    } else {
        filteredByFormat = filteredByFinish;
    }
    // get unique results as some products might have two or more same categories selected
    // also we filter first category, then finish and as last format - there will be lots of 
    // duplicates therefore
    const uniqueProducts = new Set(filteredByFormat);
    // convert Set to Array and assign its content to artists to filteredArtists
    filteredItems = Array.from(uniqueProducts);  
    // push filtered items to new array which will be looped through later on to display items
    itemsToShow = filteredItems.slice(0, numberOfItems);

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

    const updateFilterFormat = (field) => {
        let format = field;
        if (filterFormat.indexOf(format) >= 0) {
            // delete format from array
            setFilterFormat(filterFormat.filter( (i) => (i !== format) ));
        } else {
            setFilterFormat([...filterFormat, format]);
        }
    };

    return (
        <div className="container">
            <div className="items-container m-m-t-5 clearfix">
                {itemsToShow.map((item) => (
                    <Item data={item} key={item.id} />
                ))}
            </div>
            {
                numberOfItems < filteredItems.length ?
                <div className="xs-m-b-10 xs-m-t-10 m-m-t-5 m-m-b-5">
                    <div className="button xs-w-180px" onClick={ loadMoreItems }>
                        LOAD MORE PRODUCTS
                    </div>
                </div>
                :
                false
            }
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
                <div>
                    <h3>Format</h3>  
                    <input 
                        type="checkbox" 
                        name="format" 
                        value="landscape"
                        onChange={ () => updateFilterFormat('landscape') }
                        checked={ filterFormat.indexOf('landscape') !== -1 ? true : false } 
                    /> landscape &#9645; <br />
                      <input 
                        type="checkbox" 
                        name="format" 
                        value="portrait"
                        onChange={ () => updateFilterFormat('portrait') }
                        checked={ filterFormat.indexOf('portrait') !== -1 ? true : false } 
                    /> portrait &#9647; <br />
                </div>
            </div> 
        </div>
    )
   
}

export default Store;