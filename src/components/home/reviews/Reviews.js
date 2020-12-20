import React from 'react';
import Review from '../../common/Review';
import reviews from '../../common/reviews';

const Reviews = () => {
    return (
        <section>
            <h1>Reviews</h1>
            {reviews.map((review) => (
                <Review data={review} key={review.id} />
            ))}
            <div className="reviews_button button">
                SEE MORE REVIEWS
            </div>
        </section>
    )
};

export default Reviews;