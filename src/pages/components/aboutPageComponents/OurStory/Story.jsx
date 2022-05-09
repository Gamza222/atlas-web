import React from 'react'
import * as classes from './Story.module.scss'
import Trees from '../../../../images/trees.svg'

export default function Story() {
  return (
    <section id="story" className={classes.story}>
        <div className={classes.story__container}>
            <div className={classes.story__container__text}>
                <h2>OUR STORY</h2>
                <p>We started ATLAS...</p>
                <p>{`[More text here]`}</p>
            </div>
            <img src={Trees} alt="trees" />
        </div>
    </section>
  )
}
