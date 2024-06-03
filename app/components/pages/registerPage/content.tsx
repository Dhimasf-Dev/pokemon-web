"use client"

import React, { useEffect } from 'react'
import SearchBox from '../../atoms/searchBox'
import CardPoke from '../../molecules/CardPoke'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { setQuery } from '@/app/redux/reducers/searchPokeReducer';
import _ from 'lodash';
import InputAuth from '../../molecules/inputAuth';

const Content = () => {
  const dispatch = useDispatch();
  const results = useSelector((state: RootState) => state.searchPoke.results);
  const query = useSelector((state: RootState) => state.searchPoke.query);

  const fetchData = async () => {
    const url = `/api/pokeList?limit=248`
    
    const response = await axios.get(url);
    return response.data
  };

  

  const { data, isLoading, error} = useQuery({
    queryKey: ['pokemonList'],
    queryFn: () => fetchData(),
  });

  useEffect(() => {
    dispatch(setQuery(""))
  },[]);;

  if (isLoading){
    return <div className='loader relative left-[50%] my-20'></div>
  }

  if (error) return 'An error has occurred: '

  return (
    <div>
        <div className='flex justify-center flex-col gap-5'>
          <h1 className='text-2xl font-bold' >Register</h1>
          <InputAuth page="register"/>

        </div>
    </div>
  )
}

export default Content