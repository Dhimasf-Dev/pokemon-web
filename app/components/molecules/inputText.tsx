"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { addPoke } from '@/app/redux/reducers/pokeBagReducer';
import Buttons from '../atoms/buttons';
import { RootState } from '@/app/redux/store';
import { useParams } from 'next/navigation'

interface SearchBoxProps {
    className?: string;
    onClose: () => void;
}

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(20, "Name cannot more than 20 characters long")
});

const InputText = ({className, onClose}: SearchBoxProps) => {
    const params = useParams()
    const dispatch = useDispatch();
    const dataPoke = useSelector((state: RootState) => state.pokeBag.pokeBag);

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(schema),
    });

    const onSubmit = (data:any) => {
      dispatch(addPoke([...dataPoke, {...data, pokemon: params.detail}]));
      onClose()
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          {...register('name')}
          className={`p-3 pl-6  bg-[#F3F3F3] rounded-full text-sm w-full ${className}`} 
          type='text' 
          placeholder='Input Nickname ...'
        />
         {errors.name && <p className="text-[#ED5664] text-sm mt-1">{errors.name.message?.toString()}</p>}

        <div className="flex justify-end items-center gap-3 pt-6">
            <Buttons className='bg-[#ED5664] text-white py-2 px-3' title='Close' onClick={onClose} />
            <Buttons className='bg-[#1C53BA] text-white py-2 px-3' title='Submit' />
        </div>

    </form>
  )
}

export default InputText