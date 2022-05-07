import React from 'react'
import * as classes from './Footer.module.scss'
import earth from '../../../images/earth.svg'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

export default function Footer() {
  return (
    <section id='footer' className={classes.footer}>
        <div className={classes.footer__container}>
            <div className={classes.footer__container__logo}>
                <img src={earth} alt="earth picture" />
                <div>
                  <h2>ATLAS</h2>
                  <p>© ATLAS 2022</p>
                </div>
            </div>
            <form className={classes.subscribe}>
                <p>Subscribe to our newsletter</p>
                <div className={classes.subscribe__input}>
                  <input type="text" name="mail" required className={classes.subscribe__input__mail} />
                  <input type="submit" value="Subscribe" className={classes.subscribe__input__submit} />
                </div>
            </form>
            <div className={classes.socialLinks}>
                <a href=""><BsTwitter /></a>
                <a href=""><FaFacebookF /></a>
                <a href=""><FaInstagram /></a>
            </div>
        </div>
    </section>
  )
}
