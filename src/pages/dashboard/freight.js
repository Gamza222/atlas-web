import React, { useState } from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import recyclingPic from '../../dashboardImages/recycling-pic.svg'
import BoxDb from '../bcomponets/UI/BoxDb/BoxDb'
import IECircle from '../bcomponets/UI/IECircle/IECircle'

const text = [
  {
    number: 2,
    name: "Textiles Recycling",
    buttons: [
      {
        span: "Change to",
        button: "Octopus Energy",
        description: 'Estimated Cost: £1,000 per annum'
      },
      {
        span: "Change to",
        button: "Octopus Energy",
        description: 'Estimated Cost: £1,000 per annum'
      }
    ],
    circles: {
      circle1: {
        width: '147px',
        number: '500 Kg CO2'
      },
      circle2: {
        width1: '137px',
        number: '500 Kg CO2',
        width2: '200px'
      }
    }
  },
  {
    number: 3,
    name: "Textiles Recycling",
    buttons: [
      {
        span: "Change to",
        button: "Octopus Energy",
        description: 'Estimated Cost: £1,000 per annum'
      },
      {
        span: "Change to",
        button: "Octopus Energy",
        description: 'Estimated Cost: £1,000 per annum'
      }
    ]
  }
]

export default function Freight() {
  const [boxTextActive, setboxTextActive] = useState(2);

  return (
    <LayoutDashboard>
        <div className='db-container-content'>
            <div className='db-header'>
                <img src={recyclingPic} alt="" />
                <h1>RECYCLING</h1>
                <img src={recyclingPic} alt="" />
            </div>
            <div className='boxes-container'>
              <BoxDb>
                <h3><span>Suggested</span> solutions</h3>
                <div className='box-content'>
                    <div className="box-sollutions-content" style={{marginTop: '2rem'}}>
                        <div className="box-sollutions-content__text">

                          {/*butttons  and subcontent*/}
                          {
                            text.map(item => {
                            return (
                                      <div className='box-buttons'>

                                        <button className={`buttonDb ${boxTextActive == item.number ? 'box-btn__active' : ''}`} 
                                                onClick={() => setboxTextActive(item.number)}>
                                          <div />
                                          {item.name}
                                        </button>
                                            {
                                              item.buttons.map(button => {
                                              return (  
                                                      <p style={{display: boxTextActive == item.number ? "block" : "none"}}>
                                                        <div>
                                                          <span>{button.span}</span>
                                                          {/*butttons  that changes the circle*/}
                                                          <button className='buttonDb'>{button.button}</button>
                                                          {/*butttons  that changes the circle*/}
                                                        </div>
                                                        {button.description}
                                                      </p>
                                                      )
                                              })
                                            }
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
                <h3><span>Emmisions</span> benchmark</h3>
                <div className='box-content'>
                      <div className='box-circles-content'>
                        <div className='emissions-content emissions-content1'>
                              <p>Industry <br /> Benchmark</p>
                              <IECircle Width={text.find(x => {
                                console.log(x.number == boxTextActive)
                                return x.number == boxTextActive}).circles.circle1.width
                              
                              }  
                              />
                        </div>
                        <div className='emissions-content emissions-content2'>
                              
                        </div>
                      </div>
                </div>
              </BoxDb>
              <BoxDb>
                <h3><span>Suggested</span> solutions</h3>
                <div className='box-content'>

                </div>
              </BoxDb>
              <BoxDb>
                <h3><span>Suggested</span> solutions</h3>
                <div className='box-content'>
                </div>
              </BoxDb>
            </div>
        </div>
    </LayoutDashboard>
  )
}
