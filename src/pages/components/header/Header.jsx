import React, {useState} from 'react'
import * as classes from './Header.module.scss'
import { VscMenu } from 'react-icons/vsc'
import { VscClose } from 'react-icons/vsc'
import { Link } from 'gatsby'
import headerTriangle  from '../../../images/triangle.svg'

export default function Header() {
    const [active, setActive] = useState(false);

  return (
    <header className={classes.header} id="header">
        <div className={classes.header__container}>
            <Link to="/#"><img src={headerTriangle} alt="triangle" />ATLAS</Link>
            <nav className={`${classes.header__container__nav} ${active ? classes.isMenu : ''}`}>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                    <li><Link to="/signIn">Sign In</Link></li>
                </ul>   
                <button className={classes.header__container__btn}><Link to="/requestDemo">Request a Demo</Link></button>
            </nav>
            {active ? 
                    <button 
                        onClick={() => setActive(!active)}
                        className={classes.header__container__btnsm} ><VscClose /></button> 
                :   <button 
                        onClick={() => setActive(!active)}
                        className={classes.header__container__btnsm}><VscMenu /></button>}
        </div>
    </header>
  )
}
