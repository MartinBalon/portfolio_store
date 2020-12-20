import React from 'react';

const Review = ({data}) => {
    return (
        <div className="review">
            <h2>{data.name}, <span>{data.based} {data.date}</span></h2>
            <p>
                <span>&quot;</span>
                    {data.review}
                <span>&quot;</span>
            </p>
        </div>
    )
};

export default Review;