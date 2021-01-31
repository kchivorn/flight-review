import React from 'react';
import './Rating.css'

const Rating = (props) => {
    const score = (props.score/5) * 100;
    return (
        <span className="rating-box">
            <span className="rating" style={{width: score + "%"}}></span>
        </span>
    );
}

export default Rating;
