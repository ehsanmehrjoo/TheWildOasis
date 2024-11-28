import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function AppLayuot() {
  return (
    <div>
    <Sidebar />
    <Header/>
    <Outlet/>
    </div>
  )
}

export default AppLayuot