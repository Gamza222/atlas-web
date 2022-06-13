import React from 'react'
import * as classes from './GraphStore.module.scss'

export default function GraphStore(props) {

  return (
    <div className={classes.graph}>
      <div className={classes.graph__1} style={{width: props.width1, maxWidth: '90%'}}>
          <p className={classes.store}>{props.store}</p>
          <p className={classes.number}>{props.kg1}kg</p>
      </div>
      <div className={classes.graph__2} style={{width: props.width2, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg2}kg</p>
      </div>
      <div className={classes.graph__3} style={{width: props.width3, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg3}kg</p>
      </div>
      <div className={classes.graph__4} style={{width: props.width4, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg4}kg</p>
      </div>
      <div className={classes.graph__5} style={{width: props.width5, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg5}kg</p>
      </div>
      <div className={classes.graph__6} style={{width: props.width6, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg6}kg</p>
      </div>
      <div className={classes.graph__7} style={{width: props.width7, maxWidth: '100%'}}>
        <p className={classes.number}>{props.kg7}kg</p>
      </div>
    </div>
  )
}
