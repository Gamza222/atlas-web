import React from 'react'
import * as classes from './WeCanDo.module.scss'
import Phone1 from '../../../../images/phone1.png'
import Phone2 from '../../../../images/phone2.png'

export default function WeCanDo() {
  return (
    <section className={classes.wecando} id="wecando">
        <div className={classes.wecando__container}>
            <img src={Phone1} alt="" />
            <div>
                <h3>TRACK</h3>
                <p>subsidize your products. descriptive text here</p>
              </div>
              <div>
                <h3>SAVE</h3>
                <p>subsidize your products. descriptive text here</p>
              </div>
            <img src={Phone2} alt="" />
        </div>
    </section>
  )
}
