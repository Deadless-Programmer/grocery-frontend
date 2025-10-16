import React from 'react'
import { Outlet } from 'react-router-dom'
import Drawer from '../../pages/dashboard/drawer'

const DashBoard = () => {
  return (
    <div className=''>
        <Drawer/>
        {/* <Outlet></Outlet> */}
    </div>
  )
}

export default DashBoard