"use client"

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Buttons from '../atoms/buttons';
import { RootState } from '@/app/redux/store';
import { setRegister } from '@/app/redux/reducers/authReducer';
import { useRouter } from 'next/navigation';
import { login } from '@/app/redux/reducers/authReducer';
import _ from 'lodash';

interface InputAuthProps {
    className?: string;
    page: string
}

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long").max(20, "Name cannot more than 20 characters long"),
  password: z.string().min(2, "Name must be at least 2 characters long")
});

const InputAuth = ({className, page}: InputAuthProps) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const dataRegister = useSelector((state: RootState) => state.auth.userRegistered);
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isFailed, setIsFailed] = useState<boolean>(false);
    const [isPassword, setIsPassword] = useState<boolean>(true);

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(schema),
    });

    const onSubmit = (data:any) => {
      if (page == "register"){
        dispatch(setRegister([...dataRegister, data]))

        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
          router.push('/login')
        }, 3000);
      } 
      else {
        if (!_.isEmpty(dataRegister.filter((value:any) => value.name == data.name && value.password == data.password))){
          dispatch(login(data))
          setIsSuccess(true)

          setTimeout(() => {
            setIsSuccess(false)
            router.push('/home')
          }, 2000)
        }
        else {
          setIsFailed(true)
          router.push('/login')

          setTimeout(() => {
            setIsFailed(false)
          }, 2000)
        }
      }

    };

    const handlePassword = () => {
      setIsPassword(!isPassword)
    }

    const handleRedirect = () => {
      page == "register" ?
      router.push('/login')
      :
      router.push('/register')
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        (isSuccess || isFailed) &&
        <div className={`${isSuccess ? "bg-[#70CCB7]" : "bg-[#ED8775]"} p-2 rounded-xl text-white font-bold mb-5`}>
          {isSuccess ? "Succeed" : "Failed"} {page == "register" ? "Register !" : "Login !"} 
        </div>
      }
     <div className="w-80 sm:w-96 flex flex-col gap-5">
      <div>
          <input 
            {...register('name')}
            className={`p-3 pl-6  bg-[#F3F3F3] rounded-full text-sm w-full ${className}`} 
            type='text' 
            placeholder='Input Username ...'
          />
          {errors.name && <p className="text-[#ED5664] text-sm mt-1">{errors.name.message?.toString()}</p>}
        </div>

        <div className="relative">
          <input 
            {...register('password')}
            className={`p-3 pl-6 bg-[#F3F3F3] rounded-full text-sm w-full ${className}`} 
            type={isPassword ? 'password' : 'text'} 
            placeholder='Input Password ...'
          />
          <div 
            onClick={handlePassword}
            className="cursor-pointer text-[#1C53BA] text-xs absolute right-3 top-3.5 font-bold">
            {isPassword ? "Show" : "Hide"}
          </div>
          {errors.password && <p className="text-[#ED5664] text-sm mt-1">{errors.password.message?.toString()}</p>}
        </div>
     </div>

      <div className="cursor-pointer flex justify-end items-center gap-3 pt-6">
          <Buttons className='bg-[#1C53BA] text-white py-2 w-80 sm:w-96' title='Submit' />
      </div>

      <div 
        onClick={handleRedirect}
        className="cursor-pointer text-[#1C53BA] text-sm text-end underline font-bold mt-4 mr-">
        {page == "register" ? "Login" : "Register"}
      </div>

    </form>
  )
}

export default InputAuth