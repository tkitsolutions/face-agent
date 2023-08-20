import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='appContainer'>
    <Sidebar/>
    <Content>
        <Outlet/>
    </Content>
</div>
  )
}

export default Layout