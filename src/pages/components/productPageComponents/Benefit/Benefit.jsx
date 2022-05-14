import React from 'react'
import * as classes from './Benefit.module.scss'

export default function Benefit() {
  return (
    <section className={classes.benefit} id="benefit">
        <div className={classes.benefit__container}>
            <h2>HOW YOU BENEFIT</h2>
            <div>
              <div className={classes.benefit__circle}>
                  <div className={classes.benefit__circle__img}>
                    <img src="" alt="" />
                  </div>
                  <p>Benefit 1</p>
              </div>
              <div className={classes.benefit__circle}>
                  <div className={classes.benefit__circle__img}>
                    <img src="" alt="" />
                  </div>
                  <p>Benefit 2</p>
              </div>
              <div className={classes.benefit__circle}>
                  <div className={classes.benefit__circle__img}>
                    <img src="" alt="" />
                  </div>
                  <p>Benefit 3</p>
              </div>
            </div>
        </div>
    </section>
  )
}