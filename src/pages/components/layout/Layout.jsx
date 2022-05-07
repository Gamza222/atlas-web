import React from 'react'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'

export default function Layout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer />
    </div>
  )
}
