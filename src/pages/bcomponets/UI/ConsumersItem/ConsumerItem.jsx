import React from 'react'
import * as classes from './ConsumerItem.module.scss'

export default function ConsumerItem(props) {
  console.log(props.OrderNo);
  return (
    <div className={classes.ConsumerItem}>
        {props.OrderPlaced}
        <p>{props.OrderNo}</p>
        <p>{props.StoreLocation}</p>
        {props.Customer}
        <p>{props.Value}</p>
    </div>
  )
}
