import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Artist from '../common/Artist';

const Artists = () => {
    // filter options hooks
    const [sort, setSort] = useState('firstName');
    const [filterGender, setFilterGender] = useState('all');
    const [filterCategory, setFilterCategory] = useState(['Portraits', 'Sport', 'Nature', 'Architecture', 'Street', 'Aerial', 'Astrophotography']);
    // toggle filter 
    const [filter, setFilter] = useState(false);
    // display artists
    const [artists, setArtists] = useState([]);
    const [numberOfArtists, setNumberOfArtists] = useState(6);
    let filteredArtists = [];
    let artistsToShow = [];

    // get all artists from DB (local file atm)
    useEffect(() => {
        axios.get('/api/data').then( response => {
            setArtists(response.data.artists);
        });
    }, []);

    // clone artists from state
    filteredArtists = artists;
    // Sort Artists
    if (sort === 'firstName') {
        filteredArtists.sort((a,b) => a.firstName > b.firstName ? 1 : -1);
    } else if (sort === 'lastName') {
        filteredArtists.sort((a,b) => a.lastName > b.lastName ? 1 : -1);
    }
    // filter Artists by gender
    if (filterGender !== 'all') {
        let filteredByGender = filteredArtists.filter( artist => artist.gender === filterGender );
        filteredArtists = filteredByGender;
    }
    // filter Artists by category
    let filteredByCategory = [];
    // loop through each artist
    for (let artist = 0; artist < filteredArtists.length; artist++) {
        // loop through filtered category
        for (let category = 0; category < filterCategory.length; category++) {
            // loop through the kind of photograpy the artist is interested in
            for (let cubes = 0; cubes < filteredArtists[artist].shoots.length; cubes++) {
                if (filterCategory[category] === filteredArtists[artist].shoots[cubes].kind
                    && filteredArtists[artist].shoots[cubes].cubes > 0
                    ) {
                        filteredByCategory.push(filteredArtists[artist]);
                }
            }
        }  
    }
    // filter filteredByCategory to get only unique records - using Set
    const uniqueArtists = new Set(filteredByCategory);
    // convert Set to Array and assign its content to artists to filteredArtists
    filteredArtists = Array.from(uniqueArtists);
    // show X amount of artists to user after sort & filter was applied
    artistsToShow = filteredArtists.slice(0, numberOfArtists);
 
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

    const loadMoreArtists = () => {
        const previousArtists = numberOfArtists;
        setNumberOfArtists(previousArtists + 6);
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

    return (
        <div className="container" id="artists">
            <section>
                <h1>Artists</h1>
                {artistsToShow.map((artist) => (
                    <Artist data={artist} key={artist.id} />
                ))}
                {
                    numberOfArtists < filteredArtists.length ?
                    <div className="button" id="load_more_artists" onClick={ loadMoreArtists }>
                        LOAD MORE ARTISTS
                    </div>
                    :
                    false
                }
            </section>
            <div id="filter">
                <div id="filter_button" onClick={ toggleFilter }>
                    <img src="/img/logo/filter_white.svg" alt="filter logo" />
                </div>
                <h2>Filter Artists By:</h2>
                <div>
                    <h3>Gender</h3>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="all"
                        checked={ filterGender === 'all' ? true : false }
                        onChange={ () => setFilterGender('all') }  
                    /> all <br />
                    <input 
                        type="radio" 
                        name="gender" 
                        value="men"
                        checked={ filterGender === 'male' ? true : false }
                        onChange={ () => setFilterGender('male') }   
                    /> men <br />
                    <input 
                        type="radio" 
                        name="gender" 
                        value="women"
                        checked={ filterGender === 'female' ? true : false }
                        onChange={ () => setFilterGender('female') }   
                    /> women <br />
                </div>
                <div>
                    <h3>Category</h3>
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="portraits"
                        onChange={ () => updateFilterCategory('Portraits') }
                        checked={ filterCategory.indexOf('Portraits') !== -1 ? true : false } 
                    /> portraits <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="sport"
                        onChange={ () => updateFilterCategory('Sport') }
                        checked={ filterCategory.indexOf('Sport') !== -1 ? true : false } 
                    /> sport <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="nature"
                        onChange={ () => updateFilterCategory('Nature') }
                        checked={ filterCategory.indexOf('Nature') !== -1 ? true : false }  
                    /> nature <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="architecture"
                        onChange={ () => updateFilterCategory('Architecture') }
                        checked={ filterCategory.indexOf('Architecture') !== -1 ? true : false } 
                    /> architecture <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="street"
                        onChange={ () => updateFilterCategory('Street') }
                        checked={ filterCategory.indexOf('Street') !== -1 ? true : false }  
                    /> street <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="aerial"
                        onChange={ () => updateFilterCategory('Aerial') }
                        checked={ filterCategory.indexOf('Aerial') !== -1 ? true : false } 
                    /> aerial <br />
                    <input 
                        type="checkbox" 
                        name="category" 
                        value="astrophotography"
                        onChange={ () => updateFilterCategory('Astrophotography') }
                        checked={ filterCategory.indexOf('Astrophotography') !== -1 ? true : false } 
                    /> astrophotography <br />
                </div>
                <h2>Sort Artists By:</h2>
                <div>
                    <input 
                        type="radio" 
                        name="sort" 
                        value="first_name"
                        checked={ sort === 'firstName' ? true : false }
                        onChange={ () => setSort('firstName') }  
                    /> first name <br />
                    <input 
                        type="radio" 
                        name="sort" 
                        value="last_name"
                        checked={ sort === 'lastName' ? true : false }
                        onChange={ () => setSort('lastName') }  
                    /> last name <br />
                </div> 
            </div> 
        </div>
    )
};

export default Artists;