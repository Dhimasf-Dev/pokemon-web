"use client"

import React from 'react'
import _ from 'lodash';
import InputAuth from '../../molecules/inputAuth';

const Content = () => {
  return (
    <div>
        <div className='flex justify-center flex-col gap-5'>
          <h1 className='text-2xl font-bold' >Login</h1>
          <InputAuth page="login"/>
        </div>
    </div>
  )
}

export default Content