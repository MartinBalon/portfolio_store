import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Artist from '../../common/Artist';

const Artists = () => {
    const [artists, setArtists] = useState([]);
    let randomArtistsId = [];
    let randomArtists = [];

    // get all artists from DB (local file atm)
    useEffect(() => {
        axios.get('/api/data').then( response => {
            setArtists(response.data.artists);
        });
    }, []);

    // get users window width and decide how many artist to show
    const windowWidth = window.innerWidth;
    let artistsToShow = 3;
    if (windowWidth > 620 && windowWidth <= 1366) {
        artistsToShow = 4;
    } 

    if (artists.length > 0) {
        // create random IDs
        while (randomArtistsId.length < artistsToShow) {
            let randomIndex = Math.floor(Math.random() * artists.length);
            // check for duplicate ids
            if (randomArtistsId.indexOf(randomIndex) === -1) {
                randomArtistsId.push(randomIndex);
            }
        }
        // populate array with random artists
        for (let i = 0; i < artistsToShow; i++) {
            randomArtists.push(artists[randomArtistsId[i]]);
        }
    }

    return (
        <div className="xs-w-90 s-w-80 xs-m-t-10 m-m-t-5 m-cw clearfix">
            <h1 className="xs-fs-2em xs-m-b-2">Artists</h1>
            <p className="xs-fs-12em">We've been working together with amazing people that keep pushing
                boundaries of art. They capture the world the way they see it and we like it.
                We hope that you appreciate their vision of world, too! Let's have a look at few 
                of these artists so you can get to know what motivates them to capture 
                these trully stunning images.
            </p>
            { randomArtists.map(artist => <Artist data={ artist } key={ artist.id } />) }
        </div>
    )
};

export default Artists;