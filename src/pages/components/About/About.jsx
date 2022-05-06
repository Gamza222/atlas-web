import React from 'react'
import * as classes from './About.module.scss'
import workingPeople from '../../../images/workingPeople.png'

export default function About() {
  return (
    <section id="about" className={classes.about}>
        <div className={classes.about__container}>
            <img src={workingPeople} alt="group of people working in business center" />

            <div className={classes.about__container__text}>
                <h2>ABOUT US</h2>
                <p className='text'>Creating the platform to communicate companies’ net zero efforts to their customers.</p>
            </div>
        </div>
    </section>
  )
}
