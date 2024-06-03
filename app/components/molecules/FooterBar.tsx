'use client'
 
import { useParams } from 'next/navigation'
import React from 'react'
import PokeBallIcon from '@/public/svgIcon/pokeBall'
import BagIcon from '@/public/svgIcon/bag'
import Link from 'next/link'
import ArrowLeftIconButton from '@/public/svgIcon/arrowLeft'
import _ from 'lodash'

const FooterBar = () => {
    const params = useParams()
    const arrowValidate = (!_.isEmpty(params.id) || !_.isEmpty(params.list)) ? "inline" : "hidden"
    const titlePokemon = !_.isEmpty(params) ? "hidden" : "inline"

    return (
        <div className='flex justify-between items-center p-7 bg-[#313131]'>
            <div className={`${titlePokemon} text-[#FFD436] text-shadow text-2xl font-bold`}>Pokemon</div>
            <div className={arrowValidate}>
                <Link href="/">
                    <ArrowLeftIconButton />
                </Link>
            </div>
            <div className="flex items-center gap-10">
                <Link href="/pokemons">
                    <div className='cursor-pointer pt-2 flex flex-col items-center gap-2 text-white'>
                        <PokeBallIcon />
                        <div>Pokemons</div>
                    </div>
                </Link>
                <Link href="/my-pokemon">
                    <div className='cursor-pointer flex flex-col items-center text-white'>
                        <BagIcon />
                        <div>My Poke</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default FooterBar