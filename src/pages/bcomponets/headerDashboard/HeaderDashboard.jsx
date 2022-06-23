import React, {useState} from 'react'
import SideBar from '../UI/SideBar/SideBar'
import * as classes from './HeaderDashboard.module.scss'
import '../LayoutDashboard/LayoutDashboard.scss'
import menuPic from '../../../dashboardImages/menu.svg'
import InfoPic from '../../../dashboardImages/info-pic.svg'
import UsPic from '../../../dashboardImages/countries/uspic.svg'
import { Link } from 'gatsby'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function HeaderDashboard({name}) {
  const ProfileImage = undefined;
  console.log(ProfileImage);
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    
    <header id="dashboard-header" className={classes.dashboardHeader}>
        <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div className={`containerDb ${classes.dashboardHeader__container}`}>

          <Link to="/dashboard" className={classes.dashboardHeader__container__logo}>
            <h3>ATLAS</h3>
            <p>Carbon Dashboard</p>
          </Link>

          <div className={classes.dashboardHeader__container__allBtns}>

            <button className='buttonDb'><img src={UsPic} alt="country" /></button>

            <button className={`buttonDb ${classes.dashboardHeader__container__allBtns__profile}`}>
              <div className={classes.dashboardHeader__container__allBtns__profile__pic}>
                  {
                    ProfileImage ? <img src='' alt="" /> : ''
                  }
              </div>
              <div className={classes.dashboardHeader__container__allBtns__profile__name}>
                  <p>John Doe</p>
                  <p>Administrator</p>
              </div>
            </button>

            <div className={classes.dashboardHeader__container__allBtns__buttons}>

              {/*
              <div className={classes.subsidy}>
                <p>Total subsidy for reduction solutions: </p>
                <span>£112.00</span>
                <button className='buttonDb'><img src={InfoPic} alt="" /></button>
              </div>
              */}

            <button onClick={() => setActiveMenu(!activeMenu)} id={classes.overviewBTN} className={`buttonDb`}>Overwiew</button>
              {/*logout btn*/}
                <button id={classes.logout} className='buttonDb'>Log Out</button>
              {/*logout btn*/}
            </div>
          </div>
        </div>
    </header>
  )
}
