import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'





const Header = () => {
  return (
    <div className='bg-black text-white flex  px-5 py-3 justify-between'>
      <h1 className='text-xl '>WebName</h1>
      
      
      <nav className='space-x-4 '>  
        
        <NavLink to={'/about-page'} className={'text-xl hover:bg-white hover:text-black'} >About</NavLink>
      
      <NavLink to={'/product-page'} className={'text-xl hover:bg-white hover:text-black'}> Products</NavLink>
      </nav>   
      
      
      
    </div>

  )
  
}

export default Header