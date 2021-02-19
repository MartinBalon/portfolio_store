import React from 'react';
import Review from '../../common/Review';
import reviews from '../../common/reviews';

const Reviews = () => {
    return (
        <div className="xs-w-90">
            <h1 className="xs-fs-2em">Reviews</h1>
            {reviews.map((review) => (
                <Review data={review} key={review.id} />
            ))}
            <div className="xs-m-b-20 xs-m-t-10">
                <div className="button xs-w-180px">
                    SEE MORE REVIEWS
                </div>
            </div>
        </div>
    )
};

export default Reviews;