import React from 'react'
import * as classes from './AboutUs.module.scss'
import sea from '../../../../images/sea.png'

export default function AboutUs() {
  return (
    <section id="aboutUs" className={classes.aboutUs}>
        <div className={classes.aboutUs__container}>
            <img src={sea} alt="sea bg" />
            <div className={classes.aboutUs__container__text}>
              <h3>ATLAS</h3>
              <div className={classes.aboutUs__container__text__description}>
                <h2>ABOUT US</h2>
                <p>Creating the platform to <br />communicate companies’ net <br />zero efforts to their customers.</p>
              </div>
            </div>
            
        </div>
    </section>
  )
}
