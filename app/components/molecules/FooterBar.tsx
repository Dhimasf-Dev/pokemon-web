'use client'
 
import { useParams } from 'next/navigation'
import React from 'react'
import PokeBallIcon from '@/public/svgIcon/pokeBall'
import BagIcon from '@/public/svgIcon/bag'
import Link from 'next/link'
import ArrowLeftIconButton from '@/public/svgIcon/arrowLeft'
import _ from 'lodash'
import LogOutIcon from '@/public/svgIcon/logOut'
import { useDispatch } from'react-redux';
import { useRouter } from 'next/navigation'
import { logout } from '@/app/redux/reducers/authReducer'

const FooterBar = () => {
    const params = useParams()
    const dispatch = useDispatch();
    const router = useRouter()
    const arrowValidate = (!_.isEmpty(params.detail) || !_.isEmpty(params.list)) ? "inline" : "hidden"
    const titlePokemon = !_.isEmpty(params) ? "hidden" : "inline"
    const redirect = !_.isEmpty(params.detail) ? `/${params.list}` : '/home'

    const handleLogOut = () => {
        dispatch(logout())
        router.push('/login')
    }

    return (
        <div className='flex justify-between items-center p-7 bg-[#313131]'>
            <div className={arrowValidate}>
                <Link href={redirect}>
                    <ArrowLeftIconButton />
                </Link>
            </div>
            <div className="flex items-center gap-10">
                <Link href="/pokemons">
                    <div className='cursor-pointer pt-2 flex flex-col items-center gap-2 text-white'>
                        <PokeBallIcon />
                        <div className='text-sm'>Pokemons</div>
                    </div>
                </Link>
                <Link href="/my-pokemon">
                    <div className='cursor-pointer flex flex-col items-center text-white'>
                        <BagIcon />
                        <div className='text-sm'>My Poke</div>
                    </div>
                </Link>
                <div 
                onClick={handleLogOut}
                className='cursor-pointer flex flex-col gap-3 items-center text-white'>
                    <LogOutIcon />
                    <div className='text-sm'>Log Out</div>
                </div>
            </div>
        </div>
    )
}

export default FooterBar