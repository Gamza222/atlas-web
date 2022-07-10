import React from 'react'
import * as classes from "./SalesBox.module.scss"
import arrow from '../../../../dashboardImages/salesAnal/box/arrow.svg'

export default function SalesBox(props) {
  return (
    <div className={classes.container}>
        <div className={classes.container__pic}>
            <div style={{background: props.color}} />
            <img src={props.pic} alt="" />
        </div> 
        <div className={classes.container__text}>
            <h4>{props.name}</h4>
            <p>{props.text}</p>
        </div>
        {
          props.arrow == true ? 
          <button className={`buttonDb ${classes.container__arrow}`}>
            <img src={arrow} alt="" />
          </button>
          : ''
        }
    </div>
  )
}
