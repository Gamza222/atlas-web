import React from 'react'
import * as classes from './GraphTime.module.scss'

export default function GraphTime(props) {
  return (
    <div className={classes.graph}>
      <div className={classes.graph__2} style={{height: props.GRSWidth2, maxHeight: '90%'}}>
          <p>{props.Name}</p>
      </div>
      <div style={{height: props.GRSWidth1, maxHeight: '100%'}} className={classes.graph__1}>
        <p>{props.Kg}</p>
      </div>
    </div>
  )
}
