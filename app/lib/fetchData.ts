"use client"

import axios from 'axios'

const fetchData = async () => {

    const response = await axios.get(`/api/pokeList`);
    return response.data
};

export default fetchData;
