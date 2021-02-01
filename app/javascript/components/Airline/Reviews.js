import React, {Fragment} from 'react';
import Review from './Review';

const Reviews = (props) => {
    const userReviews = props.reviews.map((item, index) => {
        return (
            <Review
                key={index}
                attributes={item.attributes}
            />
        )
    });
    return (
        <Fragment>
            {userReviews}
        </Fragment>
    );
}

export default Reviews;
