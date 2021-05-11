import React from 'react';

const Review = ({ data }) => {
    return (
        <div className="review xs-m-b-5 l-w-30 left">
            <h2 className="xs-m-b-1 xs-fs-12em">
                { data.name} , <span>{ data.based } { data.date }</span>
            </h2>
            <p>
                <span>&quot;</span>
                    { data.review }
                <span>&quot;</span>
            </p>
        </div>
    )
};

export default Review;