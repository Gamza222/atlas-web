import React, {useState} from 'react'
import * as classes from './Header.module.scss'
import { VscMenu } from 'react-icons/vsc'
import { VscClose } from 'react-icons/vsc'

export default function Header() {
    const [active, setActive] = useState(false);

  return (
    <header className={classes.header} id="header">
        <div className={classes.header__container}>
            <a href="#">ATLAS</a>
            <nav className={classes.header__container__nav}>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Sign In</a></li>
                </ul>   
            </nav>
            <button className={classes.header__container__btn}><a href="">Request a Demo</a></button>
            {active ? 
            <button 
            onClick={() => setActive(!active)}
            className={classes.header__container__btnsm} ><VscClose /></button> 
            : <button 
            onClick={() => setActive(!active)}
            className={classes.header__container__btnsm}><VscMenu /></button>}
        </div>
        <nav className={`${classes.header__navsm} ${active ? classes.isMenu : ''}`}>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Product</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Sign In</a></li>
                </ul>   
                <button><a href="">Request a Demo</a></button>
        </nav>
    </header>
  )
}
