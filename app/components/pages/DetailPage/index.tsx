"use client"

import React from 'react'
import MainTemplates from '../../templates/MainTemplates'
import { useQuery } from '@tanstack/react-query';
import FirstSection from './firstSection';

const DetailPage = () => {

    return (
        <MainTemplates>
            <FirstSection />
        </MainTemplates>
    )
}

export default DetailPage