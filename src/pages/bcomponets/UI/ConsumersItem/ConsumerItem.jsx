import React from 'react'
import * as classes from './ConsumerItem.module.scss'

export default function ConsumerItem(props) {
  return (
    <div className={classes.ConsumerItem}>
        <p>{props.OrderPlaced[0]}<span>{props.OrderPlaced[1]}</span></p>
        <p>{props.OrderNo}</p>
        <p>{props.StoreLocation}</p>
        <p>{props.Customer[0]}<span>{props.Customer[1]}</span></p>
        <p>{props.Value}</p>
    </div>
  )
}
