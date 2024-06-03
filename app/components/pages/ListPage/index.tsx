"use client"

import React from 'react'
import MainTemplates from '../../templates/MainTemplates'
import { useQuery } from '@tanstack/react-query';
import FirstSection from './firstSection';
import MyPokeList from './myPokeList';
import { usePathname } from 'next/navigation'

const ListPage = () => {
    const pathname = usePathname()

    return (
        <MainTemplates>
            {
                pathname == '/my-pokemon'?
                <MyPokeList />
                :
                <FirstSection />
            }
        </MainTemplates>
    )
}

export default ListPage