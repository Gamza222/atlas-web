import React from 'react'
import IECircle from '../IECircle/IECircle'
import * as classes from './CheckoutNL.module.scss'

export default function CheckoutNL({name, beforeNum, afterNum}) {
  return (
    <div className={classes.container}>
      <h3><span>Sector:</span>{name}</h3>
      <p>Your Impact:</p>
      <div className={classes.container__circles}>
          <div className={classes.container__circles__item}>
              <p>Before</p>
              <IECircle Width={beforeNum / 5} Number={beforeNum} />
          </div>
      </div>
    </div>
  )
}
