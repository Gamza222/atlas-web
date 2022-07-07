import React, { useState } from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import productsPic from '../../dashboardImages/products-pic.svg'
import BoxDb from '../bcomponets/UI/BoxDb/BoxDb'
import IECircle from '../bcomponets/UI/IECircle/IECircle'
import YECircle from '../bcomponets/UI/YECircle/YECircle'
import LoadPic from '../../dashboardImages/load-pic.svg'
import InfoPic from '../../dashboardImages/info-pic.svg'
import GraphSite from '../bcomponets/UI/GraphSite/GraphSite'
import arrow from '../../dashboardImages/arrow-blue.svg'
import {BsArrowRight} from 'react-icons/bs'
import { totalSubsidy } from '../bcomponets/LayoutDashboard/LayoutDashboard'
import GraphTime from '../bcomponets/UI/GraphTime/GraphTime'
import switchPic from '../../dashboardImages/energy/switch-pic.svg'
import installPic from '../../dashboardImages/energy/install-pic.svg'

const graphOT = [
  {
    name: 'January',
    width1: '60%', //нужно точно знать как это строится
    width2: `${15 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '5kg'
  },
  {
    name: 'February',
    width1: '60%', //нужно точно знать как это строится
    width2: `${15 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '5kg'
  }, 
  {
    name: 'March',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'April',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'May',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'June',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'July',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'August',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'September',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
]

const graphS = [
  {
    name: 'Chiswick',
    width1: '60%', //нужно точно знать как это строится
    width2: `${15 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '5kg'
  }, 
  {
    name: 'Chiswick',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'Chiswick',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'Chiswick',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'Chiswick',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'Chiswick',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
  {
    name: 'Chiswick',
    width1: '60%', //нужно точно знать как это строится
    width2: `${28 + ((5 / 5) * 2)}%`, //нужно точно знать как это строится
    kg: '10kg'
  }, 
]

const text = [
  {
    number: 2,
    name: "Switch to Renewable Energy",
    pic: switchPic,
    buttons: [
      {
        span: "Change to",
        button: "Octopus Energy:",
        num: 1,
        description: 'monthly estimate',
        span2: '£531,11',
        circles: {
          circle1: {
            number: 2000,
            width: 116 + ((500 - 400)/100 * 1.1), //вмсето 500 должно быть то же значение что и в number
          },
          circle2: {
            number: 500,
            width1: 116 + ((2000 - 400)/100 * 1.1), //вмсето 500 должно быть то же значение что и в number
            width2: 150
          }
        }
      },
      {
        span: "Change to",
        button: "Octopus Energy:",
        num: 2,
        description: 'annual estimate',
        span2: '£627.02' ,
        circles: {
          circle1: {
            number: 4000,
            width1: 116 + ((500 - 400)/100 * 1.1),
          },
          circle2: {
            number: 500,
            width1: 116 + ((4000 - 400)/100 * 1.1), //for emissions
            width2: 200 //for benchmark
          }
        }
      }
    ],
  },
  {
    number: 3,
    name: "Install Smart Meter",
    pic: installPic,
    buttons: [
      {
        span: "Change to",
        button: "British Gas:",
        num: 3,
        description: 'annual estimate',
        span2: '£627.02' ,
        circles: {
          circle1: {
            width: 147,
            number: 500
          },
          circle2: {
            width1: 137,
            number: 500,
            width2: 140
          }
        }
      },
      {
        span: "Change to",
        button: "Octopus Energy:",
        num: 4,
        description: 'monthly estimate',
        span2: "£531,11",
        circles: {
          circle1: {
            width: 127,
            number: 500
          },
          circle2: {
            width1: 137,
            number: 500,
            width2: '200px'
          }
        }
      }
    ],
  },
]

export default function Products() {
  const [boxTextActive, setboxTextActive] = useState(2);
  const [circle, setCircle] = useState(text[0].buttons[0].num);
  const [drop, setDrop] = useState(false);
  const [site, setSite] = useState('HTL'); //HTL == highest to lowest LTH == lowest to highest
  const [siteChoice,setSiteChoice] = useState(''); //seiteChoice - выбранный сайт в серчбоксе
  console.log(siteChoice)

  return (
    <LayoutDashboard name={'Products'} pic={productsPic}>
        <div className='db-container-content'>
            <div className='db-header'>
            </div>
            <div className='boxes-container'>
            <BoxDb>
                <h3>Suggested solutions</h3>
                <div className='box-content'>
                    <div className="box-sollutions-content">
                        <div className="box-sollutions-content__text">
                          
                          <div className="subsidy">
                            <p>Total subsidy for reduction solutions: </p>
                            <span>{`£${totalSubsidy}`}</span>
                            <button className='buttonDb'><img src={InfoPic} alt="" /></button>
                          </div>

                          {/*butttons  and subcontent*/}
                          {
                            text.map(item => {
                            return (
                                      <div className='box-buttons'>

                                        <button className={`buttonDb ${boxTextActive == item.number ? 'box-btn__active' : ''}`} 
                                                onClick={() => {setboxTextActive(item.number); setCircle(item.buttons[0].num)}}>
                                          <div />
                                          {item.name}
                                          <img src={item.pic} alt="" />
                                        </button>
                                            <div>
                                            {
                                              item.buttons.map(button => {
                                              return (  
                                                        <div style={{display: boxTextActive == item.number ? "flex" : "none"}}>
                                                        <p>
                                                          <div>
                                                            <span>{button.span}</span>
                                                            {/*butttons  that changes the circle*/}
                                                            <button className='buttonDb' onClick={() => setCircle(button.num)}>{button.button}</button>
                                                            {/*butttons  that changes the circle*/}
                                                          </div>
                                                          <span>{button.span2}</span>
                                                          {button.description}
                                                        </p>
                                                        <button className='buttonDb'>Go to site</button>
                                                      </div>
                                                      )
                                              })
                                            }
                                            </div>
                                        </div>
                                      )
                                    })
                                  }
                              {/*butttons and subcontent*/}

                        </div>
                    </div>
                </div>
              </BoxDb>
              <BoxDb>
                <button className='buttonDb'><img src={InfoPic} alt="info-pic" /></button>
                <button className='buttonDb'><img src={LoadPic} alt="load-pic" /></button>
                <h3><span>Emmisions</span> benchmark</h3>
                <div className='box-content'>
                      <div className='box-circles-content'>
                        <div className='emissions-content emissions-content1'>
                              <p>Industry <br /> Benchmark</p>
                              <IECircle Width={text.find(x => x.number == boxTextActive).buttons.find(x => x.num == circle).circles.circle1.width} 
                                        Number={text.find(x => x.number == boxTextActive).buttons.find(x => x.num == circle).circles.circle1.number}
                              />
                              <div className='emissions-description'>
                                <div className='emissions-description-item emissions-description-item-1'>
                                    <div />
                                    <p>net emissions</p>
                                </div>
                              </div>
                        </div>
                        <div className='emissions-content emissions-content2'>
                        <p>Your<br /> Emissions</p>
                          <YECircle 
                                  Widt1={text.find(x => x.number == boxTextActive).buttons.find(x => x.num == circle).circles.circle2.width1} 
                                  Width2={text.find(x => x.number == boxTextActive).buttons.find(x => x.num == circle).circles.circle2.width2}
                                  Number={text.find(x => x.number == boxTextActive).buttons.find(x => x.num == circle).circles.circle2.number} 
                          />
                              <div className='emissions-description'>
                                <div className='emissions-description-item emissions-description-item-1'>
                                    <div />
                                    <p>net emissions</p>
                                </div>
                                <div className='emissions-description-item emissions-description-item-2'>
                                    <div />
                                    <p>net reduction</p>
                                </div>
                              </div>
                        </div>
                      </div>
                </div>
              </BoxDb>
              <BoxDb>
                <h3><span>Emissions</span> by store</h3>
                <div className='box-content'>
                    <div className='box-ems-content'>
                      <div className='box-ems-content__graphs'>
                        <div className='box-ems-content__graphs__nav'>
                          <div className='box-ems-content__graphs__nav__search'>
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
                          <div className='box-ems-content__graphs__line'/>
                          <div className='box-ems-content__graphs__items'>
                                  {
                                    graphS.map(gr => {
                                      return(
                                        <GraphSite GRSWidth1={gr.width1} GRSWidth2={gr.width2} Name={gr.name} Kg={gr.kg} />
                                      )
                                    })
                                  }
                          </div>
                      </div>
                    </div>
                </div>
              </BoxDb>
              <BoxDb>
                <div className='over-time-header'>
                    <h3>Emmisions by <span>month</span></h3>
                    <button className='buttonDb'>Monthly<BsArrowRight/></button> 
                </div>
                <div className='box-content last-box'>
                  <div className='graphsOT'>
                      <div className="graphsOT__graphs">
                          {
                            graphOT.map(gr => {
                              return(
                                <GraphTime GRSWidth1={gr.width1} GRSWidth2={gr.width2} Name={gr.name.split('')[0]} Kg={gr.kg} />
                              )
                            })
                          }
                      </div>
                      <div className='graphsOT__line' />
                  </div>
                </div>
              </BoxDb>
            </div>
        </div>
    </LayoutDashboard>
  )
}
