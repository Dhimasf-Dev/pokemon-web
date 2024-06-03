import React from 'react'
import NavBar from '../molecules/NavBar'

const Header = () => {
  return (
    <div className='hidden sm:inline sticky top-0'>
       <NavBar />
    </div>
  )
}

export default Header