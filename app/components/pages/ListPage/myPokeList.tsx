"use client"

import React from 'react'
import SearchBox from '../../atoms/searchBox'
import CardPoke from '../../molecules/CardPoke'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import _ from 'lodash';

const MyPokeList = () => {
  const query = useSelector((state: RootState) => state.searchPoke.query);
  const myBag = useSelector((state: RootState) => state.pokeBag.pokeBag)

  return (
    <div>
        <div className='flex flex-col gap-5'>
          <SearchBox className='w-full'/>

         <div className='grid xs:grid-cols-1 sm:grid-cols-3 gap-5'>
            {
              !_.isEmpty(query) ?
              !_.isEmpty(myBag.filter((val:any) => val.name == query)) ?
              myBag.filter((val:any) => val.name == query).map((item:any, index:number) => (
                <CardPoke data={item} index={index} key={index++} />
              ))
              :
              <div className='text-xl font-semibold'>
                Pokemon not found
              </div>
              :
              myBag.map((item:any, index:number) => (
                <CardPoke data={item} index={index} key={index++} />
              ))
            }
          </div>

        </div>
    </div>
  )
}

export default MyPokeList