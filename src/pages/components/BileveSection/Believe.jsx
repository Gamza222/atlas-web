import React from 'react'
import * as classes from './Believe.module.scss'

export default function Believe() {
  return (
    <section id="believe" className={classes.believe}>
      <div className={classes.believe__container}>
        <div className={classes.believe__container__buttons}>
          <a href="">Request a Demo</a>
          <a href="">Contact Us</a>
        </div>
        <p>We believe to change industry we must start with a platform to create an easy way for companies to reduce carbon and communicate this to their customers.</p>
      </div>
    </section>
  )
}
