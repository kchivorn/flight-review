import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Airline from './Airline';
import styled from 'styled-components';


const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
`

const Header = styled.div`
    padding: 100px 100px 10px 100px;
    h1 {
        font-size: 42px;
    }
`

const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Airlines = () => {
    const [airlines, setAirlines] = useState([]);
    useEffect(() => {
        axios.get('/api/v1/airlines.json')
        .then(resp => setAirlines(resp.data.data))
        .catch(error => console.log(error))
    }, [airlines.length]);

    const grid = airlines.map(item => {
        return (
            <Airline 
                key={item.attributes.name} 
                attributes={item.attributes}
            />
        )
    });

    return (
        <Home>
            <Header>
                <h1>Flight Review</h1>
                <Subheader>Open, unbiased airline reviews</Subheader>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
        
    )
}

export default Airlines;