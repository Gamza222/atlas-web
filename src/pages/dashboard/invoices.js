import React, {useEffect} from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import cart from '../../dashboardImages/salesAnal/cart-pic.svg'
import orders from '../../dashboardImages/salesAnal/box/orders.svg'
import user from '../../dashboardImages/salesAnal/box/user.svg'
import bag from '../../dashboardImages/salesAnal/box/bag.svg'
import location from '../../dashboardImages/salesAnal/box/location.svg'
import SalesBox from '../bcomponets/UI/SalesBox/SalesBox'
import { Line } from 'react-chartjs-2';

export default function invoices() {
 

  return (
    <LayoutDashboard download={true} name={'Overview'} add={<div className='header-add'><div><h2>Sales Analytics</h2><img src={cart} alt="" /></div></div>}>
        <div className='sales-container'>
            <div className='sales-container__boxes'>
                <SalesBox pic={orders} color={"#0AB39C"} name={"Total Orders"} text={"32,912"} arrow={false} />
                <SalesBox pic={bag} color={"#E17574"} name={"Value of Sales"} text={"£40,231"} arrow={false} />
                <SalesBox pic={user} color={"#FACA00"} name={"Total Users"} text={"823,919"} arrow={false} />
                <SalesBox pic={location} color={"#748BDC"} name={"Store Location"} text={"Chiswick"} arrow={true} />
            </div>
            <div className='sales-container__canvas'>
              <Line data={data} options={options} legend={legend} />
              <h3>Sales Yearly Report</h3>
              <p>Value of <br/> Sales</p>
            </div>
        </div>
    </LayoutDashboard>
  )
}


