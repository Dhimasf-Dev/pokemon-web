import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

interface MainTemplatesProps {
    children: React.ReactNode;
}

const AuthTemplates: React.FC<MainTemplatesProps> = ({ children }) => {
  return (
    <div>
        <main className='container flex justify-center items-center min-h-screen max-w-screen-lg bg-white rounded-lg p-10'>{children}</main>
    </div>
  )
}

export default AuthTemplates