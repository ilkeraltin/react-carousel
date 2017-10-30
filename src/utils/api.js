import React from 'react';
import axios from 'axios';

const getData = () => {
    return axios.get(`/carousel.json`);
}


export default getData;