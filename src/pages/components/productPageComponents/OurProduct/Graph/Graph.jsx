import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import * as classes from './Graph.module.scss'

export default function Graph(props) {
  return (
    <div className={classes.wrapper}>
    <div className={classes.graph}>
        <div className={classes.graph__header}>
            <p><span>{props.supHeader}</span>{props.header}</p>
            {
                props.adding ? <div><p>{props.adding}</p><AiOutlineArrowRight /></div> : ''
            }
        </div>
        <div className={classes.graph__container}>
            {
                props.children
            }
        </div>
    </div>
    <div className={classes.description}>
            <p className={classes.description__letter}>{props.letter? props.letter.split('')[0] : ''}</p>
            <div>
                <p>{props.letter ? props.letter.split('').splice([1]) : ''}</p>
                {props.text}
            </div>
    </div>
    </div>
  )
}
