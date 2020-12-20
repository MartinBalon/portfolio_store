import React, { useState } from 'react';
import Artist from '../common/Artist';
import artists from '../common/artists';

const Artists = () => {
    const [filter, setFilter ] = useState(false);

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

    return (
        <div className="container" id="artists">
            <section>
                <h1>Arists</h1>
                {/* <div className="sidebar"></div> */}
                {artists.map((artist) => (
                    <Artist data={artist} key={artist.id} />
                ))}
            </section>

            <div id="filter">
                <div id="filter_button" onClick={ toggleFilter }>
                    <img src="/img/logo/filter_white.svg" alt="filter logo" />
                </div>
                <h2>Filter Artists By:</h2>
                <div>
                    <h3>Gender</h3>
                    <input type="radio" name="gender" value="all" />   all <br />
                    <input type="radio" name="gender" value="men" />   men <br />
                    <input type="radio" name="gender" value="women" /> women <br />
                </div>
                <div>
                    <h3>Category</h3>
                    <input type="checkbox" name="category" value="portraits" />        portraits <br />
                    <input type="checkbox" name="category" value="sport" />            sport <br />
                    <input type="checkbox" name="category" value="landscape" />        landscape <br />
                    <input type="checkbox" name="category" value="architecture" />     architecture <br />
                    <input type="checkbox" name="category" value="street" />           street <br />
                    <input type="checkbox" name="category" value="aerial" />           aerial <br />
                    <input type="checkbox" name="category" value="astrophotography" /> astrophotography <br />
                </div>
                <h2>Sort Artists By:</h2>
                <div>
                    <input type="radio" name="sort" value="gender" />     gender <br />
                    <input type="radio" name="sort" value="first_name" /> first name <br />
                    <input type="radio" name="sort" value="last_name" />  last name <br />
                    <input type="radio" name="sort" value="category" />   category <br />
                </div> 
            </div> 
        </div>
    )
};

export default Artists;