import React, {useState} from 'react'
import { Link } from 'gatsby'
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
import totalPic from '../../../../dashboardImages/total-pic.svg'
import offsetPic from '../../../../dashboardImages/offset-pic.svg'
import reducePic from '../../../../dashboardImages/reduce-pic.svg'
import salesPic from '../../../../dashboardImages/sales-pic.svg'

export default function SideBar({activeMenu, setActiveMenu}) {
  console.log(activeMenu)
  const [active, setActive] = useState(0);


  return (
    <div className={`${classes.SideBar} ${activeMenu ? classes.menuActive : ''}`}>
        <button className='buttonDb'><Link to="/dashboard">ATLAS</Link></button>
        <button className='buttonDb'><img src={menuPic} alt="hamburger menu pic" />OVERVIEW</button>
        <div className={classes.SideBar__item}>
          <button className={`buttonDb ${active == 1 ? classes.buttonActive : ''}`} onClick={() => {setActive(active == 1 ? 0 : 1)}}><img src={totalPic} alt="" />Total</button>
          <div className={`${classes.SideBar__item__content} ${active == 1 ? classes.isMenu : ''}`}>
            
          </div>
        </div>
        <div className={classes.SideBar__item}>
          <button className={`buttonDb ${active == 2 ? classes.buttonActive : ''}`} onClick={() => {setActive(active == 2 ? 0 : 2)}}><img src={reducePic} alt="" />Reduce</button>
          <div className={`${classes.SideBar__item__content} ${active == 2 ? classes.isMenu : ''}`}>
          <Link to="/dashboard/freight"><img src={truck} alt="truck" />Freight</Link>
            <Link to="/dashboard/inventory"><img src={inventory} alt="truck" />Inventory</Link>
            <Link to="/dashboard/recycling"><img src={recycling} alt="recycling" />Recycling</Link>
            <Link to="/dashboard/energy"><img src={energy} alt="energy" />Energy</Link>
            <Link to="/dashboard/suppliers"><img src={suppliers} alt="suppliers" />Suppliers</Link>
            <Link to="/dashboard/employees"><img src={employee} alt="employees" />Employees</Link>
            <Link to="/dashboard/consumers"><img src={consumers} alt="consumers" />Consumers</Link>
            <Link to="/dashboard/products"><img src={products} alt="products" />Products</Link>
          </div>
        </div>
        <div className={classes.SideBar__item}>
          <button className={`buttonDb ${active == 3 ? classes.buttonActive : ''}`} onClick={() => {setActive(active == 3 ? 0 : 3)}}><img src={offsetPic} alt="" />Offset</button>
          <div className={`${classes.SideBar__item__content} ${active == 3 ? classes.isMenu : ''}`}>
          </div>
        </div>
        <div className={classes.SideBar__item}>
          <button className={`buttonDb ${active == 3 ? classes.buttonActive : ''}`} onClick={() => {setActive(active == 4 ? 0 : 4)}}><img src={salesPic} alt="" />Sales</button>
          <div className={`${classes.SideBar__item__content} ${active == 4 ? classes.isMenu : ''}`}>
          </div>
        </div>
    </div>
  )
}
