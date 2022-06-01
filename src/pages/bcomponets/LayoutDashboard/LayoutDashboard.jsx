import React from 'react'
import HeaderDashboard from '../headerDashboard/HeaderDashboard'
import './LayoutDashboard.scss'

export default function LayoutDashboard({children}) {
  return (
    <div>
      <HeaderDashboard />
        {children}
    </div>
  )
}
