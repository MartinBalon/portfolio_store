const artists = [
    {
        id: 1,
        name: 'Casey Horner',
        based: 'California, USA',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'CaseyHorner',
        shoots: [
            { kind: 'Portraits', cubes: 0 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 8 },
            { kind: 'Architecture', cubes: 2 },
            { kind: 'Street', cubes: 4 },
            { kind: 'Aerial', cubes: 0 },
            { kind: 'Astrophotography', cubes: 1 }
        ],
        social: { 
            facebook: 'https://www.facebook.com/caseyhornerphoto/' ,
            instagram: 'https://www.instagram.com/mischievous_penguins/?hl=en',
            unsplash: 'https://unsplash.com/@mischievous_penguins'
        }
    }
];

export default artists;