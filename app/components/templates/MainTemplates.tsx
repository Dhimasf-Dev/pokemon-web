import React, { useEffect } from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import _ from 'lodash';
import { redirect } from 'next/navigation';

interface MainTemplatesProps {
    children: React.ReactNode;
}

const MainTemplates: React.FC<MainTemplatesProps> = ({ children }) => {
  const dataLogin = useSelector((state: RootState) => state.auth.userLogin);

  useEffect(() => {
    _.isEmpty(dataLogin) && redirect("/register")
  },[])

  return (
    <div>
        <Header />
        <main className='container min-h-screen max-w-screen-lg bg-white rounded-lg p-10'>{children}</main>
        <Footer />
    </div>
  )
}

export default MainTemplates