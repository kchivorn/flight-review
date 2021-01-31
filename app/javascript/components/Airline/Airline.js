import axios from 'axios';
import React, {useState, useEffect, Fragment} from 'react';
import Header from './Header';
import ReviewForm from './ReviewForm';
import styled from 'styled-components';
import Review from './Review';

const Wrapper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
        background: #000;
    }
` 
const Main = styled.div`
    padding-left: 50px;
` 

const Airline = (props) => {
    const [airline, setAirline] = useState({});
    const [review, setReview] = useState({title: '', description: '', score: 0});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const slug = props.match.params.slug;
        const url = `/api/v1/airlines/${slug}`;
        axios.get(url)
        .then(resp => {
            setAirline(resp.data);
            setLoaded(true);
        })
        .catch(error => console.log(error));
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const csrfToken = document.querySelector('[name=csrf-token]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

        const airline_id = airline.data.id;
        axios.post('/api/v1/reviews', {review, airline_id})
        .then(resp => {
            const included = [...airline.included, resp.data.data];
            console.log(included);
            setAirline({...airline, included});
            setReview({title: '', description: '', score: 0});
        }).catch(error => {
            console.log(error);
        });
    }

    const setRating =  (score, e) => {
        e.preventDefault();
        setReview({...review, score});
    }

    let reviews;
    if (loaded && airline.included) {
        reviews =  airline.included.map((item, index) => {
            console.log(item);
            return (
                <Review
                    key={index}
                    attributes={item.attributes}
                />
            )
        });
    }

    return (
        <Wrapper>
            {
                loaded &&
                <Fragment>
                    <Column>
                        <Main>
                            {
                                <Header 
                                    attributes = {airline.data.attributes}
                                    reviews = {airline.included}
                                />
                            }
                            {reviews}
                        </Main>
                    </Column>

                    <Column>
                        <ReviewForm 
                            handleChange = {handleChange}
                            handleSubmit = {handleSubmit}
                            setRating = {setRating}
                            attributes = {airline.data.attributes}
                            review = {review}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}

export default Airline;