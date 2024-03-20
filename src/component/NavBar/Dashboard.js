import React from 'react'
import Nav from './Nav'
const Dashboard = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : " ml:64 "} w-full `}>
      <Nav
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
    </div>
  )
}

export default Dashboard
