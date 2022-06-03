import React from 'react'
import * as classes from './IECircle.module.scss'

export default function IECircle(props) {
  return (
    <div className={classes.circle} style={{width: `${props.Width}px`, minWidth: "116px", maxWidth: "190px", }}>
      <h4>{props.Number}<span>Kg CO2</span></h4>
    </div>
  )
}

