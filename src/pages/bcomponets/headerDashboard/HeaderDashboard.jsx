import React, {useState} from 'react'
import SideBar from '../UI/SideBar/SideBar'
import * as classes from './HeaderDashboard.module.scss'
import menuPic from '../../../dashboardImages/menu.svg'
import InfoPic from '../../../dashboardImages/info-pic.svg'

export default function HeaderDashboard({name}) {

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <header id="dashboard-header" className={classes.dashboardHeader}>
        <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div className={`containerDb ${classes.dashboardHeader__container}`}>
          <h2>{name}</h2>
          
          <div className={classes.dashboardHeader__container__buttons}>
          <div className={classes.subsidy}>
            <p>Total subsidy for reduction solutions: </p>
            <span>£112.00</span>
            <button className='buttonDb'><img src={InfoPic} alt="" /></button>
          </div>
          <button onClick={() => setActiveMenu(!activeMenu)} id={classes.overviewBTN} className={`buttonDb`}>Overwiew</button>
            {/*logout btn*/}
              <button id={classes.logout} className='buttonDb'>Log out</button>
            {/*logout btn*/}
          </div>
        </div>
    </header>
  )
}
