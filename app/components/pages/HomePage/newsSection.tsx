"use client"

import React from 'react'
import _ from 'lodash';
import PokeBallIcon from '@/public/svgIcon/pokeBall';

const NewsSection = () => {

  return (
    <div className='mt-14'>
      <div className='text-2xl font-bold'>Pokemon News</div>
      <div className='flex flex-col justify-center items-center gap-6 mt-20'>
        <PokeBallIcon width='100px' height='100px' />
        <div>
          Sorry, feature under development
        </div>
      </div>
    </div>
  )
}

export default NewsSection