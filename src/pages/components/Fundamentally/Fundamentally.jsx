import React from 'react'
import * as classes from './Fundamentally.module.scss'
import Diagram from '../../../images/circleDiagram.svg'

export default function Fundamentally() {
  return (
    <section id="fundamentally" className={classes.fundamentally}>
        <div className={classes.fundamentally__container}>
            <p className='text'>
                Fundamentally there is a limit to how much any one business can do to reduce their own carbon.
                <br /><br />Hence for what we can reduce, we ask our customers help us pioneer creating the first carbon market for consumers.
            </p>
            <img src={Diagram} alt="mult diagram in circle" />
        </div>
    </section>
  )
}
