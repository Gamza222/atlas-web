import React from 'react'
import * as classes from './productNotLog.module.scss'

export default function ProductNotLog({img, imgName, name, text, color}) {
  return (
    <div className={classes.container}>
      <div className={classes.container__image} style={{background: color}}>
        {
            img ? <img src={img} alt={imgName} />
            : ''
        }
      </div>
      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  )
}
