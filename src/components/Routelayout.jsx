import React from 'react'
import Header from './Header'


import { Outlet } from 'react-router'
import Displaysection from './Home_component/Displaysection'
import Main from './Home_component/Main'
import Footer from './Footer'

const Routelayout = () => {
  return (
    <div>
        
            <Header/>
        <Displaysection/>   
        <Main/> 
        <Footer/>
        <div className='px-8'>    
        <Outlet/>
    </div>
    </div>
  )
}

export default Routelayout