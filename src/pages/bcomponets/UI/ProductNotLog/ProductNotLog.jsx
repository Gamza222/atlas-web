import React from 'react'
import * as classes from './productNotLog.module.scss'

export default function ProductNotLog({img, imgName, name, text, color, setProduct, beforeNum, afterNum}) {
  return (
    <div className={classes.container} onClick={() => setProduct({
      name: name,
      beforeNum: beforeNum,
      afterNum: afterNum
    })}>
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
