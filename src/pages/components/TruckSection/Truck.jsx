import React from 'react'
import * as classes from './Truck.module.scss'
import truckPic from '../../../images/truck.png'

export default function Truck() {
  return (
    <section id="truck" className={classes.truck}>
        <div className={classes.truck__container}>
            <div><img src={truckPic} alt="truck" /></div>
            <div className={classes.truck__container__text}>
              <h2>How we differ?</h2>
              <p className='text'>We don’t believe in offsets, it is an ineffective band-aid to a problem which at it’s core is an inefficent supply chain.
              <br /> 
              <br /> 
              By analyzing the data we provide solutions to reduce carbon.
              </p>
            </div>
        </div>
    </section>
  )
}
