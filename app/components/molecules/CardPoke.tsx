import React from 'react'
import LabelType from '../atoms/labelType'
import Image from 'next/image'
import Buttons from '../atoms/buttons'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface DataProps {
  data: [],
  index: number,
  title: string,
  classNameBtn?: string,
  className?: string,
  onClick: () => void
}

const CardPoke = ({ data, index, className, classNameBtn, title, onClick }: any) => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className={`${className} flex flex-col justify-center items-center text-center gap-5 py-5 border shadow-xl rounded-lg`}>
      <div className='h-40'>
        <Image 
          width={130} 
          height={130} 
          src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGE}${data.pokemon || data.name}.jpg`} 
          alt={data.name} 
        />
      </div>
      <div className='flex flex-col gap-3'>
        <div>#{index}</div>
        <h3>{data.name}</h3>

        <Buttons onClick={onClick} title={title} className={`${classNameBtn} text-white text-sm py-2 px-10`} />
      </div>
    </div>
  )
}

export default CardPoke