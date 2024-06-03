"use client"

import React, { useState, useEffect } from 'react'
import SearchBox from '../../atoms/searchBox'
import CardPoke from '../../molecules/CardPoke'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import _ from 'lodash';
import PokeBallIcon from '@/public/svgIcon/pokeBall';

const MyPokeList = () => {
  const query = useSelector((state: RootState) => state.searchPoke.query);
  const myBag = useSelector((state: RootState) => state.pokeBag.pokeBag)
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    myBag && setIsloading(false)
  },[myBag])

  if (isLoading){
    return <div className='loader relative left-[50%] my-20'></div>
  }

  if (_.isEmpty(myBag)){
    return (
     <div className='flex flex-col justify-center items-center gap-6 mt-[50%]'>
        <PokeBallIcon width='50px' height='50px' />
        <div>
          You didn't have Pokemon
        </div>
     </div>
    )
  }

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