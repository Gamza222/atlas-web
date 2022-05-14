import React from 'react'
import * as classes from './WeDo.module.scss'
import weDo from '../../../../images/wedo.png'

export default function WeDo() {
  return (
    <section id="weDo" className={classes.weDo}>
        <div className={classes.weDo__container}>
            <img src={weDo} alt="ventilators" />
            <div className={classes.weDo__container__text}>
              <div>
                <p>
                A platform to help any 
                <br />
                company and their customers 
                <br />lower their carbon emissions 
                </p>
              </div>
              <h3>ATLAS</h3>
            </div>
        </div>
    </section>
  )
}
