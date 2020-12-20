const artists = [
    {
        id: 1,
        firstName: 'Casey',
        lastName: 'Horner',
        based: 'California, USA',
        gender: 'male',
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
    },
    {
        id: 2,
        firstName: 'Erik',
        lastName: 'Odiin',
        based: 'Oslo, Norway',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'ErikOdiin',
        shoots: [
            { kind: 'Portraits', cubes: 2 },
            { kind: 'Sport', cubes: 1 },
            { kind: 'Landscape', cubes: 5 },
            { kind: 'Architecture', cubes: 2 },
            { kind: 'Street', cubes: 3 },
            { kind: 'Aerial', cubes: 6 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/eodiin/',
            unsplash: 'https://unsplash.com/@odiin'
        }
    },
    {
        id: 3,
        firstName: 'Fahrul',
        lastName: 'Azmi',
        based: 'Kuala Lumpur, Malaysia',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'FahrulAzmi',
        shoots: [
            { kind: 'Portraits', cubes: 3 },
            { kind: 'Sport', cubes: 1 },
            { kind: 'Landscape', cubes: 3 },
            { kind: 'Architecture', cubes: 4 },
            { kind: 'Street', cubes: 1 },
            { kind: 'Aerial', cubes: 8 },
            { kind: 'Astrophotography', cubes: 1 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/fahrulazmi',
            unsplash: 'https://unsplash.com/@fahrulazmi'
        }
    },
    {
        id: 4,
        firstName: 'Felipe',
        lastName: 'Giacometti',
        based: 'Switzerland',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'FelipeGiacometti',
        shoots: [
            { kind: 'Portraits', cubes: 2 },
            { kind: 'Sport', cubes: 5 },
            { kind: 'Landscape', cubes: 4 },
            { kind: 'Architecture', cubes: 2 },
            { kind: 'Street', cubes: 1 },
            { kind: 'Aerial', cubes: 1 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/fegiii',
            unsplash: 'https://unsplash.com/@fegiii'
        }
    },
    {
        id: 5,
        firstName: 'Daniel',
        lastName: 'Seßler',
        based: 'Munich, Germany',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'DanielSessler',
        shoots: [
            { kind: 'Portraits', cubes: 0 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 8 },
            { kind: 'Architecture', cubes: 3 },
            { kind: 'Street', cubes: 2 },
            { kind: 'Aerial', cubes: 0 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/daniel.sessler',
            unsplash: 'https://unsplash.com/@danielsessler'
        }
    },
    {
        id: 6,
        firstName: 'Brooke',
        lastName: 'Cagle',
        based: 'Fort Smith, Arkansas',
        gender: 'female',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'BrookeCagle',
        shoots: [
            { kind: 'Portraits', cubes: 8 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 0 },
            { kind: 'Architecture', cubes: 0 },
            { kind: 'Street', cubes: 0 },
            { kind: 'Aerial', cubes: 0 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/brookecaglephotography',
            unsplash: 'https://unsplash.com/@brookecagle'
        }
    },
    {
        id: 7,
        firstName: 'Sacha',
        lastName: 'Styles',
        based: 'Sydney, Australia',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'SachaStyles',
        shoots: [
            { kind: 'Portraits', cubes: 6 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 1 },
            { kind: 'Architecture', cubes: 1 },
            { kind: 'Street', cubes: 3 },
            { kind: 'Aerial', cubes: 4 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/sachleno',
            unsplash: 'https://unsplash.com/@sachleno'
        }
    },
    {
        id: 8,
        firstName: 'Sherman',
        lastName: 'Yang',
        based: 'California, USA',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'ShermanYang',
        shoots: [
            { kind: 'Portraits', cubes: 2 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 2 },
            { kind: 'Architecture', cubes: 2 },
            { kind: 'Street', cubes: 4 },
            { kind: 'Aerial', cubes: 5 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/emp.creative',
            unsplash: 'https://unsplash.com/@emp_creative'
        }
    },
    {
        id: 9,
        firstName: 'Lerone',
        lastName: 'Pieters',
        based: 'New York, USA',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'ShermanYang',
        shoots: [
            { kind: 'Portraits', cubes: 0 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 1 },
            { kind: 'Architecture', cubes: 5 },
            { kind: 'Street', cubes: 8 },
            { kind: 'Aerial', cubes: 0 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/the.vantage.point',
            unsplash: 'https://unsplash.com/@thevantagepoint718'
        }
    },
    {
        id: 10,
        firstName: 'Alexander',
        lastName: 'Kustov',
        based: 'London, UK',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'AlexanderKustov',
        shoots: [
            { kind: 'Portraits', cubes: 1 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 3 },
            { kind: 'Architecture', cubes: 6 },
            { kind: 'Street', cubes: 4 },
            { kind: 'Aerial', cubes: 0 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/the.vantage.point',
            unsplash: 'https://unsplash.com/@alxndr_london'
        }
    },
    {
        id: 11,
        firstName: 'Susan',
        lastName: 'Yin',
        based: 'California, USA',
        gender: 'female',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'SusanYin',
        shoots: [
            { kind: 'Portraits', cubes: 1 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 4 },
            { kind: 'Architecture', cubes: 3 },
            { kind: 'Street', cubes: 5 },
            { kind: 'Aerial', cubes: 0 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/syinq',
            unsplash: 'https://unsplash.com/@syinq'
        }
    },
    {
        id: 12,
        firstName: 'Anthony',
        lastName: 'Delanoix',
        based: 'Paris, France',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'AnthonyDelanoix',
        shoots: [
            { kind: 'Portraits', cubes: 0 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 6 },
            { kind: 'Architecture', cubes: 5 },
            { kind: 'Street', cubes: 4 },
            { kind: 'Aerial', cubes: 0 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/antho.dlx',
            unsplash: 'https://unsplash.com/@anthonydelanoix'
        }
    },
    {
        id: 13,
        firstName: 'Kristopher',
        lastName: 'Roller',
        based: 'New England, USA',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'KristopherRoller',
        shoots: [
            { kind: 'Portraits', cubes: 2 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 3 },
            { kind: 'Architecture', cubes: 0 },
            { kind: 'Street', cubes: 0 },
            { kind: 'Aerial', cubes: 0 },
            { kind: 'Astrophotography', cubes: 1 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/krisroller',
            unsplash: 'https://unsplash.com/@krisroller'
        }
    },
    {
        id: 14,
        firstName: 'Adrian',
        lastName: 'Pelletier',
        based: 'USA',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'AdrianPelletier',
        shoots: [
            { kind: 'Portraits', cubes: 0 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 2 },
            { kind: 'Architecture', cubes: 0 },
            { kind: 'Street', cubes: 0 },
            { kind: 'Aerial', cubes: 0 },
            { kind: 'Astrophotography', cubes: 8 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/adrianpelletier',
            unsplash: 'https://unsplash.com/@adrianpelletier'
        }
    },
    {
        id: 15,
        firstName: 'Note',
        lastName: 'Thanun',
        based: 'Thailand',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'NoteThanun',
        shoots: [
            { kind: 'Portraits', cubes: 1 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 3 },
            { kind: 'Architecture', cubes: 5 },
            { kind: 'Street', cubes: 4 },
            { kind: 'Aerial', cubes: 1 },
            { kind: 'Astrophotography', cubes: 0 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/notethanun',
            unsplash: 'https://unsplash.com/@notethanun'
        }
    },
    {
        id: 16,
        firstName: 'Jeremy',
        lastName: 'Bishop',
        based: 'California, USA',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'JeremyBishop',
        shoots: [
            { kind: 'Portraits', cubes: 4 },
            { kind: 'Sport', cubes: 5 },
            { kind: 'Landscape', cubes: 8 },
            { kind: 'Architecture', cubes: 1 },
            { kind: 'Street', cubes: 2 },
            { kind: 'Aerial', cubes: 2 },
            { kind: 'Astrophotography', cubes: 1 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com',
            unsplash: 'https://unsplash.com/@jeremybishop'
        }
    },
    {
        id: 17,
        firstName: 'Sergey',
        lastName: 'Pesterev',
        based: 'Mendeleevo, Russia',
        gender: 'male',
        bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
        img: 'SergeyPesterev',
        shoots: [
            { kind: 'Portraits', cubes: 0 },
            { kind: 'Sport', cubes: 0 },
            { kind: 'Landscape', cubes: 8 },
            { kind: 'Architecture', cubes: 0 },
            { kind: 'Street', cubes: 1 },
            { kind: 'Aerial', cubes: 0 },
            { kind: 'Astrophotography', cubes: 2 }
        ],
        social: { 
            facebook: 'https://www.facebook.com',
            instagram: 'https://www.instagram.com/sergpesterev',
            unsplash: 'https://unsplash.com/@sickle'
        }
    }
];

export default artists;