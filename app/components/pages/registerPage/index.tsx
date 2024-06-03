"use client"

import React from 'react'
import { useQuery } from '@tanstack/react-query';
import AuthTemplates from '../../templates/AuthTemplates';
import Content from './content';

const RegisterPage = () => {

    return (
        <AuthTemplates>
            <Content />
        </AuthTemplates>
    )
}

export default RegisterPage