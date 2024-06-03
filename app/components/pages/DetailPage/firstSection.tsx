"use client"

import React, { useEffect, useState } from 'react'
import CardPoke from '../../molecules/CardPoke'
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { setQuery } from '@/app/redux/reducers/searchPokeReducer';
import _ from 'lodash';
import LabelType from '../../atoms/labelType';
import Modal from '../../molecules/Modal';

const FirstSection = () => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [limit, setLimit] = useState(10)

  const fetchData = async () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/pokemon/ivysaur?limit=${limit}`
    
    const response = await axios.get(url);
    return response.data
  };

  

  const { data, isLoading, error, refetch} = useQuery({
    queryKey: ['pokemonDetail'],
    queryFn: () => fetchData(),
    enabled: true,

  });

  useEffect(() => {
    dispatch(setQuery(""))
    refetch()
  },[]);;
  
  useEffect(() => {
    refetch()
  },[limit]);;

  const openModal = () => {
    const random = Math.round(Math.random())

    if (random == 1){
      setIsSuccess(true)
    }
    else {
      setIsSuccess(false)
    }

    setIsModal(true)
  };
  const closeModal = () => setIsModal(false);


  if (isLoading){
    return <div>Loading...</div>
  }


  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
        <div className='flex flex-col gap-5'>
          <div className='text-2xl font-bold'>{data.name}</div>
          <div className='flex gap-4'>
            {
              data.types.map((type: string) => (
                <LabelType className='bg-[#9CCC50]' title={type} />
              ))
            }
          </div>

          <CardPoke 
            classNameBtn="bg-[#1C53BA]"
            title="Catch" 
            onClick={openModal}
            data={data} 
            index={0} 
          />

          <Modal 
            onClose={closeModal}
            open={isModal}
            isSuccess={isSuccess}
          />

        </div>
    </div>
  )
}

export default FirstSection