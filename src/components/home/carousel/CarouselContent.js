import React from 'react';

const CarouselContent = (props) => {
    return (
        <div style={{
            transform: `translateX(-${props.translate}px)`,
            transition: `transform ease-out ${ props => props.transition }s`,
            height: '100%',
            width: `${ props => props.width } px`,
            display: 'flex',
            backgroundColor: 'red',
            color: 'white'
        }}>
            1 Slide
        </div>
    )
};

export default CarouselContent;