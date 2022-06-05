import React, { useState } from 'react'
import LayoutDashboard from './bcomponets/LayoutDashboard/LayoutDashboard'
import BoxDb from './bcomponets/UI/BoxDb/BoxDb';
import {BsArrowRight} from 'react-icons/bs'
import IECircle from './bcomponets/UI/IECircle/IECircle';
import GraphStore from './bcomponets/UI/GraphSrore/GraphStore';

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

]

export default function Dashboard() {
  const [siteChoice,setSiteChoice] = useState(''); //seiteChoice - выбранный сайт в серчбоксе

  return (
    <LayoutDashboard>
      <div className='db-container-content'>
        <div className='boxes-container'>

                <BoxDb>
                  <h3><span>Suggested</span> solutions</h3>
                  <div className='box-content'>
                  <ul class="chart-skills">
                    <li>
                      <span>CSS</span>
                    </li>
                    <li>
                      <span>HTML</span>
                    </li>
                    <li>
                      <span>PHP</span>
                    </li>
                    <li>
                      <span>Python</span>
                    </li>
                  </ul>
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

                              <div className='box-ems-content__graphs__nav__search' style={{marginRight: '1rem', alignSelf: 'flex-end'}}>
                                  <input type="text" onChange={(e) => setSiteChoice(e.target.value)} placeholder="Search by Site..."/>
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
                    
                  </div>
                </BoxDb>

              </div>
            </div>
    </LayoutDashboard>
  )
}
