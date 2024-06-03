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

const FirstSection = () => {
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
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl font-bold' >What Pokemon are you looking for?</h1>
          <SearchBox className='w-full'/>

         <div className='grid xs:grid-cols-1 sm:grid-cols-3 gap-5'>
            {
              !_.isEmpty(query) ?
              !_.isEmpty(data.filter((val:any) => val.name == query)) ?
              data.filter((val:any) => val.name == query).map((item:any, index:number) => (
                <CardPoke data={item} index={index} key={index++} />
              ))
              :
              <div className='text-xl font-semibold'>
                Pokemon not found
              </div>
              : <></>
            }
          </div>
        </div>
    </div>
  )
}

export default FirstSection