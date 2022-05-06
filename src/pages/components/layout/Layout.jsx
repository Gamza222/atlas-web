import React from 'react'
import Header from '../header/Header'
import './Layout.scss'

export default function Layout({children}) {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}
