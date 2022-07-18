import React, {useEffect} from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import cart from '../../dashboardImages/salesAnal/cart-pic.svg'
import orders from '../../dashboardImages/salesAnal/box/orders.svg'
import user from '../../dashboardImages/salesAnal/box/user.svg'
import bag from '../../dashboardImages/salesAnal/box/bag.svg'
import location from '../../dashboardImages/salesAnal/box/location.svg'
import SalesBox from '../bcomponets/UI/SalesBox/SalesBox'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

// gradient
  

//colorstops
  







export default function SalesAnalytics() {
 
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Value of Sales',
        data: [15000, 0, 40000, 42000, 30000, 45000, 28000,65000, 38000, 15000, 97000, 12000], // numbers for each month shpuld be here (array should be returned) 
        borderColor: '#748BDC',
        fill: {
          target: "origin",
          above:'rgba(25, 91, 218, 0.2)',
        },
        backgroundColor: '#748BDC',
      }
    ],
  };
  
  const options = {
    tension: 0.3,
    plugins: {
      legend: {
          display: false
      },
  },
  
    title: {
      display: true,
      text: "Chart Title"
    },
    scales: {
      yAxes: {
        barPercentage: 1.6,
        grid: {
          display: false,
          color: "#8DABC4",
          zeroLineColor: "transparent"
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 125000,
          padding: 2,
          backdropPadding: 2,
          backdropColor: "rgba(255,255,255,1)",
          color: "#8DABC4",
          font: {
            family: "Manrope", 
            size: 12
          },
          major: {
            enable: true
          }
        }
      },
      xAxes: {
        barPercentage: 1.6,
        grid: {
          display: true,
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          color: "#8DABC4",
          font: {
            family: "Manrope",
            size: 12
          },
  
          major: {
            enable: false
          }
        }
      }
    }
  };
  
  const legend = {
    display: false,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14
    }
  };

  return (
    <LayoutDashboard name={'Overview'} add={<div className='header-add'><div><h2>Sales Analytics</h2><img src={cart} alt="" /></div></div>}>
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


{/*
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'CSales Yearly Report',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [15000, 12000, 40000, 42000, 30000, 45000, 28000,65000, 38000, 15000, 97000, 12000],
      borderColor: '#748BDC',
      backgroundColor: '#748BDC',
      yAxisID: 'y',
    }
  ],
};

export function App() {
  return <Line options={options} data={data} />;
}

*/}