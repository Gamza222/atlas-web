import React, {useState} from 'react'
import IECircle from '../IECircle/IECircle'
import YECircle from '../YECircle/YECircle'
import arrow from '../../../../dashboardImages/carbonDbNL/arrow-pic.svg'
import * as classes from './CheckoutNL.module.scss'
import {AiOutlineClose} from 'react-icons/ai'

export default function CheckoutNL({price, name, beforeNum, afterNum, line, setProduct, product}) {

  return (
    <div className={classes.container} style={{display: product.name == undefined ? "none" : "flex"}}>
      <button onClick={() => setProduct('')} className='buttonDb'><AiOutlineClose /></button>
      <h3><span>Sector:</span>{name}</h3>
      <p>Your Impact:</p>
      <div className={classes.container__circles}>
          <div className={classes.container__circles__item}>
              <p>Before</p>
              <div><IECircle Width={beforeNum / 5} Number={beforeNum} /></div>
              <p className={classes.container__circles__item__emissions}><span />current emissions</p>
          </div>

          <img className={classes.container__circles__arrow} src={arrow} />

          <div className={classes.container__circles__item}>
              <p>After</p>
              <div><YECircle Width2={beforeNum / 5} Width1={afterNum / 5} Number={afterNum} /></div>
              <p className={classes.container__circles__item__emissions}><span />emissions after offset</p>
              <p className={classes.container__circles__item__reduction}><span />total reduction</p>
          </div>
      </div>
      {
        line === false ? ''
        :  <div className={classes.container__line} />
      }

      {
        line === false ? ""
        : <div className={classes.container__sub}>
            <p>Subscribe to offset</p>
            <p>£{price}<span>per month</span></p>
            <button className={classes.button}>Go to Checkout</button>
          </div>
      }
    </div>
  )
}
