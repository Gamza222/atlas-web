import React from 'react'
import * as classes from './GraphTimeDb.module.scss'

export default function GraphTheight(props) {
  return (
    <div className={classes.graph}>
      <div className={classes.graph__7} style={{height: props.height7, maxWidth: '100%'}}>
          <p className={classes.number}>{props.kg7}kg</p>
      </div>
      <div className={classes.graph__6} style={{height: props.height6, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg6}kg</p>
      </div>
      <div className={classes.graph__5} style={{height: props.height5, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg5}kg</p>
      </div>
      <div className={classes.graph__4} style={{height: props.height4, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg4}kg</p>
      </div>
      <div className={classes.graph__3} style={{height: props.height3, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg3}kg</p>
      </div>
      <div className={classes.graph__2} style={{height: props.height2, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg2}kg</p>
      </div>
      <div className={classes.graph__1} style={{height: props.height1, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg1}kg</p>
        <p className={classes.month}>{props.month}</p>
      </div>
    </div>
  )
}
