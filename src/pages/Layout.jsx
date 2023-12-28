import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './styles.css';

function Layout() {
  return (
    <div className="flex min-h-screen outer " >
    <div className="flex flex-col flex-grow ">
      <Navbar />
      <div className="flex-grow mt-4">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Layout