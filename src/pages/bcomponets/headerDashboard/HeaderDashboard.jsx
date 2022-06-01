import React, {useState} from 'react'
import SideBar from '../UI/SideBar/SideBar'
import * as classes from './HeaderDashboard.module.scss'
import menuPic from '../../../dashboardImages/menu.svg'

export default function HeaderDashboard() {

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <header id="dashboard-header" className={classes.dashboardHeader}>
        <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div className={`containerDb ${classes.dashboardHeader__container}`}>
          <h2>ATLAS</h2>
          <div className={classes.dashboardHeader__container__buttons}>
          <button onClick={() => setActiveMenu(!activeMenu)} id={classes.overviewBTN} className={`buttonDb`}>Overwiew</button>
            {/*logout btn*/}
              <button id={classes.logout} className='buttonDb'>Log out</button>
            {/*logout btn*/}
          </div>
        </div>
    </header>
  )
}
