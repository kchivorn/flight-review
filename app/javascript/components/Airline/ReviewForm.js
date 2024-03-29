import React, {Fragment} from 'react';
import styled from 'styled-components';
import Gray from './Stars/Gray';
import Hover from './Stars/Hover';
import Selected from './Stars/Selected';

const RatingContainer = styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 40px 0 10px 0;
    border: 1px solid #e6e6e6;
    background: #fff;
`
const RatingBox = styled.div`
    background: #fff;
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    flex-direction: row-reverse;
    position: relative;
    margin-top: 12px;

    input {display: none}

    label {
        cursor: pointer;
        width: 40px;
        height: 40px;
        margin-top: auto;
        background-image: url("data:image/svg+xml;charset=UTF-8, ${Gray}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 76%;
        transition: .3s;
    }

    input:checked ~ label, input:checked ~ label ~ label {
        background-image: url("data:image/svg+xml;charset=UTF-8, ${Selected}");
    }

    input:not(:checked) ~ label:hover,
    input:not(:checked) ~ label:hover ~ label {
        background-image: url("data:image/svg+xml;charset=UTF-8, ${Hover}");
    }
`
const RatingTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
`
const Wrapper = styled.div`
    box-sizing: border-box;
    background: #000;
    padding: 20px;
    height: 100vh;
    padding-top: 100px;
`

const Field = styled.div`
    border-radius: 4px;
    input {
        min-height: 50px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        margin: 0 0 12px 0;
        padding: 12px;
        width: 96%;
    }

    textarea {
        width: 100%;
        min-height: 80px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        margin: 12px 0;
        padding: 12px;
    }
`
const SubmitBtn = styled.button`
    color: #fff;
    background: #00ee00;
    border-radius: 4px;
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #fff;
    width: 96%;
    margin-top: 20px;

    &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #fff;
    }
`
const HeadLine = styled.div`
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`

const ReviewForm = (props) => {
    const ratingOptions = [5,4,3,2,1].map((score, index) => {
        return (
            <Fragment key={index}>
                <input type="radio" value={score} checked={props.review.score == score} onChange={()=>console.log('onChange')} name="rating" id={`rating-${score}`} />
                <label onClick={props.setRating.bind(this, score)}></label>
            </Fragment>
        )
    })
    
    return (
        <Wrapper>
            <form onSubmit={props.handleSubmit}>
                <HeadLine>Have an experience with {props.attributes.name}? Share your review!</HeadLine>
                <Field>
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" />
                </Field>
                <Field>
                    <input onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description" />
                </Field>
                <Field>
                    <RatingContainer>
                        <RatingTitle>Rate This Airline</RatingTitle>
                        <RatingBox>{ratingOptions}</RatingBox>
                    </RatingContainer>
                </Field>

                <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
            </form>
        </Wrapper>
    );
}

export default ReviewForm;
