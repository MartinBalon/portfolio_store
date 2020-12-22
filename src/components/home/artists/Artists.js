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

    if (artists.length > 0) {
        // create three random IDs
        while(randomArtistsId.length < 3) {
            let randomIndex = Math.floor(Math.random() * artists.length);
            if (randomArtistsId.indexOf(randomIndex) === -1) {
                randomArtistsId.push(randomIndex);
            }
        }
        // populate array with three random artists
        for (let i = 0; i < 3; i++) {
            randomArtists.push(artists[randomArtistsId[i]]);
        }
    }

    return (
        <section>
            <h1>Artists</h1>
            <p className="artists_p">We've been working together with amazing people that keep pushing
                boundaries of art. They capture the world the way they see it and we like it.
                We hope that you appreciate their vision of world, too! Let's have a look at few 
                of these artists so you can get to know what motivates them to capture 
                these trully stunning images.
            </p>
            {randomArtists.map((artist) => (
                <Artist data={artist} key={artist.id} />
            ))}
        </section>
    )
};

export default Artists;