"use client"

import React from 'react'
import MainTemplates from '../../templates/MainTemplates'
import { useQuery } from '@tanstack/react-query';
import FirstSection from './firstSection';
import SecondSection from './secondSection';

const HomePage = () => {

    return (
        <MainTemplates>
            <FirstSection />
            <SecondSection />
        </MainTemplates>
    )
}

export default HomePage