"use client"

import React from 'react'
import _ from 'lodash';
import InputAuth from '../../molecules/inputAuth';

const Content = () => {
  return (
    <div>
        <div className='flex justify-center flex-col gap-5'>
          <h1 className='text-2xl font-bold' >Register</h1>
          <InputAuth page="register"/>

        </div>
    </div>
  )
}

export default Content