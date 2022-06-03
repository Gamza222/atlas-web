import React from 'react'
import * as classes from './YECircle.module.scss'

export default function YECircle(props) {
  return (
    <div className={classes.bigCircle} style={{width: `${props.Width2}px`, maxWidth: "190px", minWidth: "122px"}}>
      <div className={classes.smallCircle} style={{width: `${props.Width1}px`, minWidth: "116px", maxWidth: "190px"}}>
        <h4>{props.Number}<span>Kg CO2</span></h4>
      </div>
    </div>
  )
}

