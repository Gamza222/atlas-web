import React from 'react'
import * as classes from './ForCustomers.module.scss'
import pc from '../../../images/fundamentally.png'
import phone1 from '../../../images/phone1.png'
import phone2 from '../../../images/phone2.png'

export default function ForCustomers() {
  return (
    <section id="fundamentally" className={classes.fundamentally}>
        <div className={classes.fundamentally__container}>
            <div className={classes.fundamentally__container__text}>
                <h2>What we can do for the customer</h2>
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
            <div>
              <img src={phone1} alt="phone1" />
              <img src={phone2} alt="phone2" />
            </div>
        </div>
    </section>
  )
}
