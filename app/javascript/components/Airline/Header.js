import React from 'react';
import styled from 'styled-components';
import Average from '../Utils/Utils';
import Rating from '../Rating/Rating';

const Wrapper = styled.div`
    padding: 50px 100px 50px 0;
    font-size: 30px;

    img {
        height: 60px;
        width: 60px;
        border-radius: 100%;
        border: 1px solid rgba(0,0,0,0.1);
        margin-bottom: -8px;
    }
`

const TotalReviews = styled.div`
    font-size: 18px;
    padding: 10px 0;
`

const TotalOutOf = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
`

const Header = (props) => {
    console.log(props);
    const { name, image_url, average_score} = props.attributes;
    const total = props.reviews.length;
    return (
        <Wrapper>
            <h1><img src={image_url} alt={name} />{name}</h1>
            <div>
                <TotalReviews>{total} User Reviews</TotalReviews>
                <Rating score={average_score} />
                <TotalOutOf>{Average(average_score/20.0)} out of 5</TotalOutOf>
            </div>
        </Wrapper>
    )
}

export default Header;