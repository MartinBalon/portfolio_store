import React from 'react';

let cubesToRender = [];

const renderCubes = (cubes) => {
    cubesToRender = [];
    let amountOfCubes = cubes;
    let id = 100;
    // create 8 cubes and give them active class based on interest
    for (let i = 0; i < 8; i++) {
        if (amountOfCubes > 0) {
            cubesToRender.push(<div className="cube cube_active" key={ id }></div>);
        } else {
            cubesToRender.push(<div className="cube" key={ id }></div>);  
        }
        amountOfCubes--;
        id++      
    }
};

const Artist = ({ data }) => {
    const img = `img/artists/${data.img}.jpg`;
    const name = data.firstName + ' ' + data.lastName;
    
    return (
        <div className="artist xs-m-t-20 m-m-t-10">
            <img src={img} alt={name} className="artist_image"/>
            <h2>{name}</h2>
            <h4>{data.based}</h4>
            <div className="social_media_icons">
                <div>
                    <a href={data.social.facebook} target="_blank" rel="noreferrer">
                        <img src="/img/logo/facebook.svg" alt="facebook logo" />
                    </a>
                    <a href={data.social.instagram} target="_blank" rel="noreferrer">
                        <img src="/img/logo/instagram.svg" alt="instagram logo" />
                    </a>
                    <a href={data.social.unsplash} target="_blank" rel="noreferrer">
                        <img src="/img/logo/unsplash.svg" alt="unsplash logo" />
                    </a>
                </div>
            </div>
            <p>{data.bio}</p>
            <div className="photo_category_container xs-m-b-10">
                {// loop through photo category and display cubes 
                data.shoots.map((photography) => (
                    <div className="clearfix photo_category" key={photography.kind}>
                        <p>{photography.kind}</p>
                        {// update array of cubes for each category
                        renderCubes(photography.cubes)}  
                        {// render cubes 
                        cubesToRender }
                    </div>
                ))}
            </div>
            <div className="button xs-w-100px">
                <a 
                    href={ data.social.unsplash } 
                    target="blank" 
                    style={{ color: 'white' }}
                >
                    GALLERY
                </a>
            </div>
        </div>
    )
};

export default Artist;