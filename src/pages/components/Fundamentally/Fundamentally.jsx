import React from 'react'
import * as classes from './Fundamentally.module.scss'
import pc from '../../../images/fundamentally.png'

export default function Fundamentally() {
  return (
    <section id="fundamentally" className={classes.fundamentally}>
        <div className={classes.fundamentally__container}>
            <div className={classes.fundamentally__container__text}>
                <h2>What we can do for your company</h2>
                <p>
                  We can via our web platform provide you a comprehensive look at your carbon emissions
                </p> 
                <p>
                  Immediately provide suggestions to reduce your carbon. 
                </p>
                <p>
                  For what we can’t reduce we look to provide discounts for your lowest CO2 products.
                </p>    
            </div>
            <img src={pc  } alt="" />
        </div>
    </section>
  )
}
