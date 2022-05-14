import React from 'react'
import * as classes from './AboutUs.module.scss'
import sea from '../../../../images/sea.png'

export default function AboutUs() {
  return (
    <section id="aboutUs" className={classes.aboutUs}>
        <div className={classes.aboutUs__container}>
            <img src={sea} alt="sea bg" />
            <div className={classes.aboutUs__container__text}>
              <p>
                Our web platform analyzes and <br/> reduces the CO2 emissions of your <span>company</span>
                <br/>
                <br/>
                Our app tracks the CO2 of purchases and <br/> provide discounts for low CO2 products for <br/>your <span>customers </span>
                <br/>
                <br/>
                <span>Read more on our Product page...</span>
              </p>
              <h2>WHAT WE DO</h2>
            </div>
            
        </div>
    </section>
  )
}
