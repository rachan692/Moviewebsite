import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Mainpage = () => {
  return (
    <div>
        <h1>This is mainpage</h1>
        <nav>
            <NavLink to={'/page-1'}>Page 1</NavLink>
        
            <NavLink to={'/page-2'}>Page 2</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Mainpage