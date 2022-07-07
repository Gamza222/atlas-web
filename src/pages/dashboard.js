import React, { useState } from 'react'
import LayoutDashboard from './bcomponets/LayoutDashboard/LayoutDashboard'
import BoxDb from './bcomponets/UI/BoxDb/BoxDb';
import {BsArrowRight} from 'react-icons/bs'
import IECircle from './bcomponets/UI/IECircle/IECircle';
import GraphStore from './bcomponets/UI/GraphSrore/GraphStore';
import GraphTimeDb from './bcomponets/UI/GraphTimeDb/GraphTimeDb';
import DonutChart from "react-donut-chart";
import arrow from '../dashboardImages/arrow-blue.svg'
import Chart from "react-google-charts";
import InfoPic from '../dashboardImages/info-pic.svg'
import { totalSubsidy } from './bcomponets/LayoutDashboard/LayoutDashboard'

function calcWidth(num) {
  let newNum = num * 0.8;

  if (newNum >= 80) {
    return '80%'
  }

  return `${newNum}%`
}

function calcName(name) {
  if(name.split('').length > 8) {
    return name.split('').slice(0, 7).join('') + '..'
  }
  else {
    return name
  }
}



const circles = {
  benchmark: {
    width: 137,
    number: 3000
  },

  emmisions: {
    width: 197,
    number: 4000
  }
} 
const graphsMonth = [
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(18)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(8)
    },
    seg6: {
      kg: 10,
      height: calcWidth(19)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(30)
    },
    seg2: {
      kg: 8,
      height: calcWidth(20)
    },
    seg3: {
      kg: 5,
      height: calcWidth(10)
    },
    seg4: {
      kg: 15,
      height: calcWidth(5)
    },
    seg5: {
      kg: 20,
      height: calcWidth(8)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(8)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(15)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(8)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(15)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(8)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(15)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(8)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(15)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(8)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(15)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(8)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(15)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(8)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(15)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(8)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(15)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(8)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(15)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
  {
    name: 'January',
    seg1: {
      kg: 40,
      height: calcWidth(40)
    },
    seg2: {
      kg: 8,
      height: calcWidth(8)
    },
    seg3: {
      kg: 5,
      height: calcWidth(5)
    },
    seg4: {
      kg: 15,
      height: calcWidth(8)
    },
    seg5: {
      kg: 20,
      height: calcWidth(15)
    },
    seg6: {
      kg: 10,
      height: calcWidth(7)
    },
    seg7: {
      kg: 10,
      height: calcWidth(10)
    },
  },
]

const graphsStore = [
  {
    store: calcName('Chiswick'),
    seg1: {
      kg: 40,
      width: calcWidth(40)
    },
    seg2: {
      kg: 8,
      width: calcWidth(8)
    },
    seg3: {
      kg: 5,
      width: calcWidth(5)
    },
    seg4: {
      kg: 15,
      width: calcWidth(8)
    },
    seg5: {
      kg: 20,
      width: calcWidth(15)
    },
    seg6: {
      kg: 10,
      width: calcWidth(7)
    },
    seg7: {
      kg: 10,
      width: calcWidth(10)
    },
  },
  {
    store: calcName('Chiswick'),
    seg1: {
      kg: 40,
      width: calcWidth(40)
    },
    seg2: {
      kg: 8,
      width: calcWidth(8)
    },
    seg3: {
      kg: 5,
      width: calcWidth(5)
    },
    seg4: {
      kg: 15,
      width: calcWidth(8)
    },
    seg5: {
      kg: 20,
      width: calcWidth(15)
    },
    seg6: {
      kg: 10,
      width: calcWidth(7)
    },
    seg7: {
      kg: 10,
      width: calcWidth(10)
    },
  },
  {
    store: calcName('Chiswick'),
    seg1: {
      kg: 40,
      width: calcWidth(40)
    },
    seg2: {
      kg: 8,
      width: calcWidth(8)
    },
    seg3: {
      kg: 5,
      width: calcWidth(5)
    },
    seg4: {
      kg: 15,
      width: calcWidth(8)
    },
    seg5: {
      kg: 20,
      width: calcWidth(15)
    },
    seg6: {
      kg: 10,
      width: calcWidth(7)
    },
    seg7: {
      kg: 10,
      width: calcWidth(10)
    },
  },
  {
    store: calcName('Chiswick'),
    seg1: {
      kg: 40,
      width: calcWidth(40)
    },
    seg2: {
      kg: 8,
      width: calcWidth(8)
    },
    seg3: {
      kg: 5,
      width: calcWidth(5)
    },
    seg4: {
      kg: 15,
      width: calcWidth(8)
    },
    seg5: {
      kg: 20,
      width: calcWidth(15)
    },
    seg6: {
      kg: 10,
      width: calcWidth(7)
    },
    seg7: {
      kg: 10,
      width: calcWidth(10)
    },
  },
  {
    store: calcName('Chiswick'),
    seg1: {
      kg: 40,
      width: calcWidth(40)
    },
    seg2: {
      kg: 8,
      width: calcWidth(8)
    },
    seg3: {
      kg: 5,
      width: calcWidth(5)
    },
    seg4: {
      kg: 15,
      width: calcWidth(8)
    },
    seg5: {
      kg: 20,
      width: calcWidth(15)
    },
    seg6: {
      kg: 10,
      width: calcWidth(7)
    },
    seg7: {
      kg: 10,
      width: calcWidth(10)
    },
  },
  {
    store: calcName('Chiswick'),
    seg1: {
      kg: 40,
      width: calcWidth(40)
    },
    seg2: {
      kg: 8,
      width: calcWidth(8)
    },
    seg3: {
      kg: 5,
      width: calcWidth(5)
    },
    seg4: {
      kg: 15,
      width: calcWidth(8)
    },
    seg5: {
      kg: 20,
      width: calcWidth(15)
    },
    seg6: {
      kg: 10,
      width: calcWidth(7)
    },
    seg7: {
      kg: 10,
      width: calcWidth(10)
    },
  },
  {
    store: calcName('Chiswick'),
    seg1: {
      kg: 40,
      width: calcWidth(40)
    },
    seg2: {
      kg: 8,
      width: calcWidth(8)
    },
    seg3: {
      kg: 5,
      width: calcWidth(5)
    },
    seg4: {
      kg: 15,
      width: calcWidth(8)
    },
    seg5: {
      kg: 20,
      width: calcWidth(15)
    },
    seg6: {
      kg: 10,
      width: calcWidth(7)
    },
    seg7: {
      kg: 10,
      width: calcWidth(10)
    },
  },
  {
    store: calcName('Chiswick'),
    seg1: {
      kg: 40,
      width: calcWidth(40)
    },
    seg2: {
      kg: 8,
      width: calcWidth(8)
    },
    seg3: {
      kg: 5,
      width: calcWidth(5)
    },
    seg4: {
      kg: 15,
      width: calcWidth(8)
    },
    seg5: {
      kg: 20,
      width: calcWidth(15)
    },
    seg6: {
      kg: 10,
      width: calcWidth(7)
    },
    seg7: {
      kg: 10,
      width: calcWidth(10)
    },
  },

]

const data = {
  label: ["Pickup", "Delivery", "Ship to Home"],
  datasets: [
    {
      data: [1, 1, 1, 3, 2, 3, 4, 2], // чем больше номер, тем больше доля в круге
      backgroundColor: ["#14873C", "#ECC528","#F38448", "#192383", "#4C66C2", "#95DCAE", "#5CB67B"],
      hoverBackgroundColor: ["red", "#36A2EB", "#FFCE56"],
      borderWidth: 1
    }
  ],
  text: "25%"
};

const options1 = {
  responsive: true,
  cutoutPercentage: 105,
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: "bottom",
    usePointStyle: "true",
  }
};


const donutChart = {
  freight: 10,
  suppliers: 15,
  products: 15,
  recycling: 10,
  employees: 8,
  inventory: 8,                       
  energy: 20,     
}

const donutKeys = Object.keys(donutChart);
const percent = donutKeys.reduce((item, curr) => {
  return item + donutChart[curr]
}, 0) / 100

export default function Dashboard() {
  const [drop, setDrop] = useState(false);
  const [site, setSite] = useState('HTL'); //HTL == highest to lowest LTH == lowest to highest
  const [siteChoice,setSiteChoice] = useState(''); //seiteChoice - выбранный сайт в серчбоксе

  function numToArr(name) {
    let arr = (donutChart[name] / percent).toString().split('');
    console.log(arr.indexOf['.'])
    let b = "";
    for (let a = 0; a < arr.indexOf('.'); a++) {
      console.log(arr[a])
      if(arr[a] == '.') {
        b+=","
      } else {
        b+=arr[a];
      }
    }
    return b
  }
  console.log(numToArr('freight'))

  return (
    <LayoutDashboard name={'Overview'}>
      <div className='db-container-content'>
        <div className='boxes-container'>

                <BoxDb>
                  <h3>Your Carbon Score</h3>
                      <div className='box-content'>
                        <div className="subsidy">
                            <p>Total subsidy for reduction solutions: </p>
                            <span>{`£${totalSubsidy}`}</span>
                            <button className='buttonDb'><img src={InfoPic} alt="" /></button>
                          </div>
                        <div className='main-emissions-circles'>
                            <div className='main-emissions-circles__item'>
                              <IECircle 
                                Width={circles.benchmark.width}
                                Number={circles.benchmark.number}
                                Bg={'#4C66C2'}
                              />
                              <p>Industry<br />Benchmark</p>
                            </div>
                            <div className='main-emissions-circles__item'>
                              <IECircle 
                                Width={circles.emmisions.width}
                                Number={circles.emmisions.number}
                                Bg={'#192383'}
                              />
                              <p>Industry<br />Benchmark</p>
                            </div>
                        </div>
                      </div>
                </BoxDb>

                <BoxDb>
                  <h3><span>Emissions by </span>category</h3>
                  <div className='box-content box-content2' style={{overflow: 'hidden'}}>
                    <p className='circle-chart-number'>
                      {'4,000kg'}
                    </p>

                    <Chart
                      chartType="PieChart"
                      width="420px"
                      height="420px"
                      data={
                      [
                        ["Sphere", "amount"],
                        ["Freight", donutChart.freight],
                        ["Suppliers", donutChart.suppliers],
                        ["Products", donutChart.products],
                        ["Recycling", donutChart.recycling],
                        ["Employees", donutChart.employees],
                        ["Inventory", donutChart.inventory],                       
                        ["Energy", donutChart.energy],                       
                      ]
                      }
                      options={
                        {
                        pieHole: 0.8,
                        is3D: false,
                        pieSliceText: "none",
                        spreadSheetQueryParameters: { headers: 2, gid: 1, },
                        slices: {
                          0: { color: "#192383" },
                          1: { color: "#4C66C2" },
                          2: { color: "#95DCAE" },
                          3: { color: "#5CB67B" },
                          4: { color: "#14873C" },
                          5: { color: "#ECC528" },
                          6: { color: "#F38448" },
                        },
                       
                        pieSliceText: "none",
                        legend: "none",
                      }
                      }
                    />

                    <div className='donut-options'>

                      <div className='donut-options__item'>
                        <p className='donut-options__item__title' style={{'--circle-color': '#192383'}}>
                          Freight
                        </p>
                        <p className='donut-options__item__text'>
                          {
                            `${numToArr('freight')}% - ${donutChart.freight}` 
                          }
                        </p>
                      </div>
                      
                      <div className='donut-options__item'>
                        <p className='donut-options__item__title' style={{'--circle-color': '#4C66C2'}}>
                          Suppliers
                        </p>
                        <p className='donut-options__item__text'>
                          {
                            `${numToArr('suppliers')}% - ${donutChart.suppliers}` 
                          }
                        </p>
                      </div>
                      <div className='donut-options__item'>
                        <p className='donut-options__item__title' style={{'--circle-color': '#95DCAE'}}>
                          Products
                        </p>
                        <p className='donut-options__item__text'>
                          {
                            `${numToArr('products')}% - ${donutChart.products}` 
                          }
                        </p>
                      </div>
                      <div className='donut-options__item'>
                        <p className='donut-options__item__title' style={{'--circle-color': '#5CB67B'}}>
                          Recycling
                        </p>
                        <p className='donut-options__item__text'>
                          {
                            `${numToArr('recycling')}% - ${donutChart.recycling}` 
                          }
                        </p>
                      </div>
                      <div className='donut-options__item'>
                        <p className='donut-options__item__title' style={{'--circle-color': '#14873C'}}>
                          Employees
                        </p>
                        <p className='donut-options__item__text'>
                          {
                            `${numToArr('employees')}% - ${donutChart.employees}` 
                          }
                        </p>
                      </div>
                      <div className='donut-options__item'>
                        <p className='donut-options__item__title' style={{'--circle-color': '#ECC528'}}>
                          Inventory
                        </p>
                        <p className='donut-options__item__text'>
                          {
                            `${numToArr('inventory')}% - ${donutChart.inventory}` 
                          }
                        </p>
                      </div>
                      <div className='donut-options__item'>
                        <p className='donut-options__item__title' style={{'--circle-color': '#F38448'}}>
                          Energy
                        </p>
                        <p className='donut-options__item__text'>
                          {
                            `${numToArr('energy')}% - ${donutChart.energy}` //мало элементов поэтому просто складывае
                          }
                        </p>
                      </div>

                    </div>
                  </div>
                </BoxDb>

                <BoxDb>
                  <h3><span>Emissions</span> by store</h3>
                  <div className='box-content'>
                            <div className='store-graphs-content'>

                            <div className='box-ems-content__graphs__nav' style={{position: 'static', width: '90%', padding:'1rem 0.5rem 0 1rem'}}>
                              <div className='box-ems-content__graphs__nav__search' style={{marginTop: '-0.3rem'}}>
                                  <input type="text" onChange={(e) => setSiteChoice(e.target.value)} placeholder="Search by Site..."/>
                              </div>
                              <div className='box-ems-content__graphs__nav__dropdown'>
                                <button className='buttonDb' onClick={() => setDrop(!drop)}><img src={arrow} alt="" />{site === 'HTL' ? 'Rank Highest to Lowest' : 'Rank Lowest to Highest'}</button>
                                <div style={ drop ? {display: 'block'}:{}}>
                                  <button className='buttonDb' onClick={() => {setSite('HTL'); setDrop(!drop)}}>Rank Highest to Lowest</button>
                                  <button className='buttonDb' onClick={() => {setSite('LTH'); setDrop(!drop)}}>Rank Lowest to Highest</button>
                                </div>
                              </div>
                            </div>
                            
                              <div className='store-graphs'>
                              
                                <div className="store-graphs__line" />
                                <div className='store-graphs__items'>
                                  {graphsStore.map(gr => {
                                    return (
                                      <GraphStore 
                                      store={gr.store} 
                                      width1={gr.seg1.width} width2={gr.seg2.width} width3={gr.seg3.width} width4={gr.seg4.width} width5={gr.seg5.width} width6={gr.seg6.width} width7={gr.seg7.width} 
                                      kg1={gr.seg1.kg} kg2={gr.seg2.kg} kg3={gr.seg3.kg} kg4={gr.seg4.kg} kg5={gr.seg5.kg} kg6={gr.seg6.kg} kg7={gr.seg7.kg} 
                                      />
                                    )
                                  })}
                                </div>
                              </div> 
                            </div>
                  </div>
                </BoxDb>

                <BoxDb>
                  <div className='over-time-header'>
                      <h3>Emissions by <span>month</span></h3>
                      <button className='buttonDb'>Monthly<BsArrowRight/></button> 
                  </div>
                  <div className='box-content'>
                    <div className='time-main-graphs'>
                      <div className='time-main-graphs__item'>
                        {
                          graphsMonth.map(gr => {
                            return(
                              <GraphTimeDb 
                              height1={gr.seg1.height} height2={gr.seg2.height} height3={gr.seg3.height} height4={gr.seg4.height} height5={gr.seg5.height} height6={gr.seg6.height} height7={gr.seg7.height} 
                              kg1={gr.seg1.kg} kg2={gr.seg2.kg} kg3={gr.seg3.kg} kg4={gr.seg4.kg} kg5={gr.seg5.kg} kg6={gr.seg6.kg} kg7={gr.seg7.kg} 
                              month={gr.name.split('')[0]}
                              />
                            )
                          })
                        }
                      </div>
                      <div className='time-main-graphs__line'/>
                    </div>
                  </div>
                </BoxDb>

              </div>
            </div>
    </LayoutDashboard>
  )
}
