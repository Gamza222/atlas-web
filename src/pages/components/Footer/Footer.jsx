import React from 'react'
import * as classes from './Footer.module.scss'
import footerTriangle  from '../../../images/triangle.svg'
import footerArrow  from '../../../images/footerArrow.svg'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

export default function Footer() {
  return (
    <section id='footer' className={classes.footer}>
        <div className={classes.footer__container}>
            <div className={classes.footer__container__logo}>
                <img src={footerTriangle} alt="earth picture" />
                <div>
                  <h2>ATLAS</h2>
                  <p>© ATLAS 2022</p>
                </div>
            </div>
            <form className={classes.subscribe}>
                <p>Subscribe to our newsletter</p>
                <form className={classes.subscribe__input}>
                  <input type="text" name="mail" placeholder="..." required className={classes.subscribe__input__mail} />
                 <button className={classes.subscribe__input__submit}><input type="submit" id="submitFooter" hidden /></button>
                </form>
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
