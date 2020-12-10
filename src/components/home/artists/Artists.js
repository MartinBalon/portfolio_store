import React from 'react';
import Artist from '../../common/Artist';
import artists from '../../common/artists';

const Artists = () => {
    return (
        <section>
            <h1>Artists</h1>
            <p className="artists_p">We've been working together with amazing people that keep pushing
                boundaries of art. They capture the world the way they see it and we like it.
                We hope that you appreciate their vision of world, too! Let's have a look at few 
                of these artists so you can get to know what motivates them to capture 
                these trully stunning images.
            </p>
            {artists.map((artist) => (
                <Artist data={artist} key={artist.id} />
            ))}
        </section>
    )
};

export default Artists;