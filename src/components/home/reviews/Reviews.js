import React from 'react';
import Review from '../../common/Review';
import reviews from '../../common/reviews';

const Reviews = () => {
    return (
        <div className="xs-w-90 s-w-80 xs-m-t-10 m-m-t-5 m-cw">
            <h1 className="xs-fs-2em m-m-b-2">Reviews</h1>
            <div className="clearfix">
                { reviews.map(review => <Review data={ review } key={ review.id } />) }
            </div>
            <div className="xs-m-b-5 xs-m-t-5 m-m-t-2">
                <div className="button xs-w-180px">
                    SEE MORE REVIEWS
                </div>
            </div>
        </div>
    )
};

export default Reviews;