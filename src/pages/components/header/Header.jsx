import React, {useState} from 'react'
import * as classes from './Header.module.scss'
import { VscMenu } from 'react-icons/vsc'
import { VscClose } from 'react-icons/vsc'
import { Link } from 'gatsby'

export default function Header() {
    const [active, setActive] = useState(false);

  return (
    <header className={classes.header} id="header">
        <div className={classes.header__container}>
            <Link to="/#">ATLAS</Link>
            <nav className={classes.header__container__nav}>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/signIn">Sign In</Link></li>
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
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/signIn">Sign In</Link></li>
                </ul>   
                <button><a href="">Request a Demo</a></button>
        </nav>
    </header>
  )
}
