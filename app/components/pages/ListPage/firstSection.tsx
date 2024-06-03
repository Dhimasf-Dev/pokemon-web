"use client"

import React, { useEffect, useState } from 'react'
import SearchBox from '../../atoms/searchBox'
import CardPoke from '../../molecules/CardPoke'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { setQuery } from '@/app/redux/reducers/searchPokeReducer';
import _ from 'lodash';
import { useRouter, usePathname } from 'next/navigation'

const FirstSection = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.searchPoke.query);
  const router = useRouter()
  const pathname = usePathname()

  const [limit, setLimit] = useState(10)

  const fetchData = async () => {
    const url = `/api/pokeList?limit=${limit}`
    
    const response = await axios.get(url);
    return response.data
  };

  const { data, isLoading, error, refetch} = useQuery({
    queryKey: ['pokemonList'],
    queryFn: () => fetchData(),

  });

  const handleRoutes = (name: string) => {
    router.push(`${pathname}/${name}`)
  }

  useEffect(() => {
    dispatch(setQuery(""))
  },[]);;
  
  useEffect(() => {
    refetch()
  },[limit]);;

  const handleLimit = (e:any) => {
    setLimit(e.target.value)
    
  }

  if (isLoading){
    return <div className='loader relative left-[50%] my-20'></div>
  }

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
        <div className='flex flex-col gap-5'>
          <SearchBox className='w-full'/>

         <div className='grid xs:grid-cols-1 sm:grid-cols-3 gap-5'>
            {
              !_.isEmpty(query) ?
              !_.isEmpty(data.filter((val:any) => val.name == query)) ?
              data.filter((val:any) => val.name == query).map((item:any, index:number) => (
                <CardPoke onClick={() => handleRoutes(item.name)} data={item} index={index + 1} key={index + 1} />
              ))
              :
              <div className='text-xl font-semibold'>
                Pokemon not found
              </div>
              :
              data.map((item:any, index:number) => (
                <CardPoke onClick={() => handleRoutes(item.name)} title="Detail" classNameBtn="bg-[#1C53BA] text-white py-2 px-10" data={item} index={index + 1} key={index + 1} />
              ))
            }
          </div>

         <div className='flex justify-between'>
          <div className='flex items-center gap-5'>
              <label htmlFor="10">Limit</label>
              <select onChange={(e:any) => handleLimit(e)} className='border py-2 px-3 rounded-xl' name="cars" id="cars">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>

            <div className='flex gap-10'>
              <div>Previous</div>
              <div>Next</div>
            </div>
         </div>


        </div>
    </div>
  )
}

export default FirstSection