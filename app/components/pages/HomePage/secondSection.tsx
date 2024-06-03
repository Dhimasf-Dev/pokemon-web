"use client"

import React, { useEffect } from 'react'
import SearchBox from '../../atoms/searchBox'
import CardPoke from '../../molecules/CardPoke'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import fetchData from '@/app/lib/fetchData';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { setQuery } from '@/app/redux/reducers/searchPokeReducer';
import _ from 'lodash';
import Buttons from '../../atoms/buttons';
import Link from 'next/link';

const SecondSection = () => {
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
    return <></>
  }


  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-5'>
      <Link href="/pokemon">
        <Buttons title='Pokemon' className='cursor-pointer bg-[#70CCB7] text-white text-start font-semibold py-4 pl-5 w-full'/>
      </Link>
      <Link href="/move">
        <Buttons title='Moves' className='cursor-pointer bg-[#6FB9F5] text-white text-start font-semibold py-4 pl-5 w-full'/>
      </Link>
      <Link href="/ability">
        <Buttons title='Abilities' className='cursor-pointer bg-[#FCD55E] text-white text-start font-semibold py-4 pl-5 w-full'/>
      </Link>
      <Link href="/gender">
        <Buttons title='Genders' className='cursor-pointer bg-[#85629A] text-white text-start font-semibold py-4 pl-5 w-full'/>
      </Link>
      <Link href="/location">
        <Buttons title='Location' className='cursor-pointer bg-[#B57F75] text-white text-start font-semibold py-4 pl-5 w-full'/>
      </Link>
      <Link href="/type">
        <Buttons title='Types' className='cursor-pointer bg-[#ED8775] text-white text-start font-semibold py-4 pl-5 w-full'/>
      </Link>
    </div>
  )
}

export default SecondSection