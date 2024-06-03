import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

interface MainTemplatesProps {
    children: React.ReactNode;
}

const MainTemplates: React.FC<MainTemplatesProps> = ({ children }) => {
  return (
    <div>
        <Header />
        <main className='container min-h-screen max-w-screen-lg bg-white rounded-lg p-10'>{children}</main>
        <Footer />
    </div>
  )
}

export default MainTemplates