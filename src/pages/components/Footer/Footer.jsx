import React from 'react'
import * as classes from './Footer.module.scss'
import earth from '../../../images/earth.svg'

export default function Footer() {
  return (
    <section id='footer' className={classes.footer__container}>
        <div className={classes.footer__container}>
            <div className={classes.footer__container__logo}>
                <img src={earth} alt="earth picture" />
            </div>
        </div>
    </section>
  )
}
