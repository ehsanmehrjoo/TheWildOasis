import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayuot() {
  return (
    <div>
    <p>AppLayuot</p>
    <Outlet/>
    </div>
  )
}

export default AppLayuot