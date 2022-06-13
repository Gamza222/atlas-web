import React, { useState } from 'react'
import LayoutDashboard from './bcomponets/LayoutDashboard/LayoutDashboard'
import BoxDb from './bcomponets/UI/BoxDb/BoxDb';
import {BsArrowRight} from 'react-icons/bs'
import IECircle from './bcomponets/UI/IECircle/IECircle';
import GraphStore from './bcomponets/UI/GraphSrore/GraphStore';
import GraphTimeDb from './bcomponets/UI/GraphTimeDb/GraphTimeDb';
import DonutChart from "react-donut-chart";
import arrow from '../dashboardImages/arrow-blue.svg'

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


export default function Dashboard() {
  const [drop, setDrop] = useState(false);
  const [site, setSite] = useState('HTL'); //HTL == highest to lowest LTH == lowest to highest
  const [siteChoice,setSiteChoice] = useState(''); //seiteChoice - выбранный сайт в серчбоксе

  return (
    <LayoutDashboard name={'Your Dashboard'}>
      <div className='db-container-content'>
        <div className='boxes-container'>

                <BoxDb>
                  <h3><span>Emissions</span> by category</h3>
                  <div className='box-content' style={{overflow: 'hidden'}}>
                    <p className='circle-chart-number'>
                      {'4,000kg'}
                    </p>
                  <DonutChart
                    className="dchart"
                    width={500}
                    toggledOffset={0}
                    height={500}
                    innerRadius={0.62}
                    selectedOffset={0}
                    strokeColor={"#fff"}
                    outerRadius={0.5}
                    colors={[
                      "#192383",
                      "#4C66C2",
                      "#95DCAE",
                      "#5CB67B",
                      "#14873C",
                      "#ECC528",
                      "#F38448"
                    ]}
                      data={[
                        {
                          label: "Freight",
                          value: 15
                        },
                        {
                          label: "Inventory",
                          value: 23
                        },
                        {
                          label: "Recycling",
                          value: 23
                        },
                        {
                          label: "Energy",
                          value: 10
                        },
                        {
                          label: "Suppliers",
                          value: 7
                        },
                        {
                          label: "Employees",
                          value: 7
                        },
                        {
                          label: "Products",
                          value: 23
                        }
                      ]}
                    />
                  </div>
                </BoxDb>

                <BoxDb>
                  <h3><span>Emmisions</span> benchmark</h3>
                      <div className='box-content'>
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
                      <h3><span>Suggested</span> solutions</h3>
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
