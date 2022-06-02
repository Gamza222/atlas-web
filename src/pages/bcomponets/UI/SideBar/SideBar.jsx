import React, {useState} from 'react'
import * as classes from './SideBar.module.scss'
import menuPic from '../../../../dashboardImages/menu.svg'
import arrow from '../../../../dashboardImages/arrow.svg'
import energy from '../../../../dashboardImages/energy.svg'
import inventory from '../../../../dashboardImages/inventory.svg'
import consumers from '../../../../dashboardImages/consumers.svg'
import employee from '../../../../dashboardImages/employee.svg'
import products from '../../../../dashboardImages/products.svg'
import recycling from '../../../../dashboardImages/recycling.svg'
import suppliers from '../../../../dashboardImages/suppliers.svg'
import truck from '../../../../dashboardImages/truck.svg'
import { RiArrowDownSFill } from 'react-icons/ri'

export default function SideBar({activeMenu, setActiveMenu}) {
  console.log(activeMenu)
  const [active, setActive] = useState(0);


  return (
    <div className={`${classes.SideBar} ${activeMenu ? classes.menuActive : ''}`}>
        <button className='buttonDb'><img src={menuPic} alt="hamburger menu pic" />OVERVIEW</button>
        <div className={classes.SideBar__item}>
          <button className={`buttonDb ${active == 1 ? classes.buttonActive : ''}`} onClick={() => {setActive(active == 1 ? 0 : 1)}}><img src={arrow} alt="" />Total</button>
          <div className={`${classes.SideBar__item__content} ${active == 1 ? classes.isMenu : ''}`}>
            <a href="/freight"><img src={truck} alt="truck" />Freight</a>
            <a href="/inventory"><img src={inventory} alt="truck" />Inventory</a>
            <a href="/recycling"><img src={recycling} alt="recycling" />Recycling</a>
            <a href="/energy"><img src={energy} alt="energy" />Energy</a>
            <a href="/suppliers"><img src={suppliers} alt="suppliers" />Suppliers</a>
            <a href="/employees"><img src={employee} alt="employees" />Employees</a>
            <a href="/consumers"><img src={consumers} alt="consumers" />Consumers</a>
            <a href="/products"><img src={products} alt="products" />Products</a>
          </div>
        </div>
        <div className={classes.SideBar__item}>
          <button className={`buttonDb ${active == 2 ? classes.buttonActive : ''}`} onClick={() => {setActive(active == 2 ? 0 : 2)}}><img src={arrow} alt="" />Reduce</button>
          <div className={`${classes.SideBar__item__content} ${active == 2 ? classes.isMenu : ''}`}>
            <a href="/freight"><img src={truck} alt="truck" />Freight</a>
            <a href="/inventory"><img src={inventory} alt="truck" />Inventory</a>
            <a href="/recycling"><img src={recycling} alt="recycling" />Recycling</a>
            <a href="/energy"><img src={energy} alt="energy" />Energy</a>
            <a href="/suppliers"><img src={suppliers} alt="suppliers" />Suppliers</a>
            <a href="/employees"><img src={employee} alt="employees" />Employees</a>
            <a href="/consumers"><img src={consumers} alt="consumers" />Consumers</a>
            <a href="/products"><img src={products} alt="products" />Products</a>
          </div>
        </div>
        <div className={classes.SideBar__item}>
          <button className={`buttonDb ${active == 3 ? classes.buttonActive : ''}`} onClick={() => {setActive(active == 3 ? 0 : 3)}}><img src={arrow} alt="" />Subsidize    </button>
          <div className={`${classes.SideBar__item__content} ${active == 3 ? classes.isMenu : ''}`}>
            <a href="/freight"><img src={truck} alt="truck" />Freight</a>
            <a href="/inventory"><img src={inventory} alt="truck" />Inventory</a>
            <a href="/recycling"><img src={recycling} alt="recycling" />Recycling</a>
            <a href="/energy"><img src={energy} alt="energy" />Energy</a>
            <a href="/suppliers"><img src={suppliers} alt="suppliers" />Suppliers</a>
            <a href="/employees"><img src={employee} alt="employees" />Employees</a>
            <a href="/consumers"><img src={consumers} alt="consumers" />Consumers</a>
            <a href="/products"><img src={products} alt="products" />Products</a>
          </div>
        </div>
    </div>
  )
}
