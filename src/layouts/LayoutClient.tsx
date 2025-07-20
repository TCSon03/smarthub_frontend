import React from 'react'
import HeaderClient from '../components/Header/HeaderClient'
import { Outlet } from 'react-router-dom'

const LayoutClient = () => {
  return (
    <div>
        <HeaderClient />
        <Outlet />
    </div>
  )
}

export default LayoutClient