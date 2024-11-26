import React from 'react'
import Header from './Header'


import { Outlet } from 'react-router'
import Displaysection from './Home_component/Displaysection'
import Main from './Home_component/Main'
import Footer from './Footer'
import Home from '../pages/Home'


const Routelayout = () => {
  return (
    <div>
        
            <Header/>
        {/* <Displaysection/>   
        <Main/> 
        <Footer/> */ }

        {/* <Home/> */}
        
        
        <Outlet/>
    </div>
    
  )
}

export default Routelayout