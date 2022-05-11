import React from 'react'
import Form from '../UI/Form/Form'
import * as classes from './Request.module.scss'

export default function RequestDemo() {
  return (
    <section id="request" className={classes.request}>
        <div className={classes.request__container}>
            <h1>REQUEST A DEMO</h1>
            <p>Encouraging words/tagline here.</p>
            <div id={classes.greenCircles}>
                <div />
                <div />
                <div />
            </div>
            <div id={classes.orangeCircles}>
                <div />
                <div />
                <div />
            </div>
            <form action="">
                <div className={classes.request__container__item}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="" required/>
                </div> 
                <div className={classes.request__container__item}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="" required/>
                </div> 
                <div className={classes.request__container__item}>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" placeholder="" required/>
                </div> 
                <div className={classes.request__container__itemMessage}>
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" placeholder="" required/>
                </div> 
                <button>Request a Demo</button>
            </form>
        </div>
    </section>
  )
}
