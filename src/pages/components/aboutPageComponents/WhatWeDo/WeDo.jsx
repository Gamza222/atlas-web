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
                    Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed<br />  
                    do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. 
                    <br />
                    <br />
                    Ut enim ad minim veniam, quis nostrud<br /> 
                    exercitation ullamco laboris nisi ut aliquip ex ea<br /> commodo consequatrunt mollit anim id est laborum.
                </p>
              </div>
              <h3>WHAT WE DO</h3>
            </div>
        </div>
    </section>
  )
}
