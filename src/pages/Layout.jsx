import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer.jsx'


function Layout() {
  return (
<div className="flex min-h-screen">  
    <div className="flex flex-col flex-grow">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <Outlet />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    </div>
  )
}

export default Layout