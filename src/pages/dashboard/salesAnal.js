import React from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import cart from '../../dashboardImages/salesAnal/cart-pic.svg'
import orders from '../../dashboardImages/salesAnal/box/orders.svg'
import SalesBox from '../bcomponets/UI/SalesBox/SalesBox'
import ReactApexChart from 'react-apexcharts'

export default function salesAnal() {
  return (
    <LayoutDashboard name={'Overview'} add={<div className='header-add'><h2>Sales Analytics</h2><img src={cart} alt="" /></div>}>
        <div className='sales-container'>
            <div className='sales-container__boxes'>
                <SalesBox pic={orders} color={"#0AB39C"} name={"Total Orders"} text={"32,912"} arrow={false} />
                <SalesBox pic={orders} color={"#0AB39C"} name={"Total Orders"} text={"32,912"} arrow={false} />
                <SalesBox pic={orders} color={"#0AB39C"} name={"Total Orders"} text={"32,912"} arrow={false} />
                <SalesBox pic={orders} color={"#0AB39C"} name={"Total Orders"} text={"32,912"} arrow={true} />
            </div>
            <ReactApexChart 
              options={{
                chart: {
                  height: 250,
                  type: 'line',
                  zoom: {
                  enabled: false
                }}
              }}
              series={[{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }]}
            />
        </div>
    </LayoutDashboard>
  )
}
