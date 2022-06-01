import React from 'react'
import * as classes from './BoxDb.module.scss'

export default function BoxDb({children}) {
  return (
    <div className='box-container'>
        {children}
    </div>
  )
}
