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
import { login, setRegister } from '@/app/redux/reducers/authReducer';

interface InputAuthProps {
    className?: string;
    page: string
}

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(20, "Name cannot more than 20 characters long"),
  password: z.string().min(2, "Name must be at least 2 characters long")
});

const InputAuth = ({className, page}: InputAuthProps) => {
    const params = useParams()
    const dispatch = useDispatch();
    const dataRegister = useSelector((state: RootState) => state.auth.userRegistered);

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(schema),
    });

    const onSubmit = (data:any) => {
      page == "register" ?
      dispatch(setRegister([...dataRegister, data])) :
      dispatch(login(data))
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="w-96 flex flex-col gap-5">
      <div>
          <input 
            {...register('name')}
            className={`p-3 pl-6  bg-[#F3F3F3] rounded-full text-sm w-full ${className}`} 
            type='text' 
            placeholder='Input Username ...'
          />
          {errors.name && <p className="text-[#ED5664] text-sm mt-1">{errors.name.message?.toString()}</p>}
        </div>

        <div>
          <input 
            {...register('password')}
            className={`p-3 pl-6  bg-[#F3F3F3] rounded-full text-sm w-full ${className}`} 
            type='text' 
            placeholder='Input Password ...'
          />
          {errors.password && <p className="text-[#ED5664] text-sm mt-1">{errors.password.message?.toString()}</p>}
        </div>
     </div>

      <div className="flex justify-end items-center gap-3 pt-6">
          <Buttons className='bg-[#1C53BA] text-white py-2 w-96' title='Submit' />
      </div>

    </form>
  )
}

export default InputAuth