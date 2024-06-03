"use client"

import React from 'react'
import MainTemplates from '../../templates/MainTemplates'
import { useQuery } from '@tanstack/react-query';
import FirstSection from './firstSection';
import SecondSection from './secondSection';
import NewsSection from './newsSection';

const HomePage = () => {

    return (
        <MainTemplates>
            <FirstSection />
            <SecondSection />
            <NewsSection />
        </MainTemplates>
    )
}

export default HomePage