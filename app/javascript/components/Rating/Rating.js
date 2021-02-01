import React from 'react';
import './Rating.css';

const Rating = (props) => {
    return (
        <span className="rating-box">
            <span className="rating" style={{width: props.score + "%"}}></span>
        </span>
    );
}

export default Rating;
