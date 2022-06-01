import React, {useState} from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import consumersPic from '../../dashboardImages/consumers-pic.svg'
import { CgSearch } from 'react-icons/cg'
import arrow from '../../dashboardImages/arrow-blue.svg'
import ConsumerItem from '../bcomponets/UI/ConsumersItem/ConsumerItem'

const periods = [
    //тут должны быть периоды времени 
    '1 May - 31 May',
    '1 June - 31 June',
    '1 July - 31 July',
];

const locations = [
    //тут должны быть локации
    'Mike’s Chiswick',
    '1 June - 31 June',
    '1 July - 31 July',
];
     
    

export default function Consumers() {
const [focus, setFocus] = useState(false);
const [menu, setMenu] = useState(false);

const [menuLocation, setMenuLocation] = useState(false);
const [period, setPeriod] = useState(periods[0]);
const [location, setLocation] = useState(locations[0]);


console.log(menu)

  return (
    <LayoutDashboard>
        <div className='db-container-content'>
            <div className='db-header'>
                <img src={consumersPic} alt="consumersPic" />
                <h1>Consumers</h1>
                <img src={consumersPic} alt="consumersPic" />
            </div>
            <div className='consumers-container'>

                {/*Input form*/}
                <form action="" className={`consumers-search ${focus ? 'isFocus' : ''}`}>
                    <CgSearch />
                    <input type="text" className='consumers-search__input' onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/>
                    <input type="submit" hidden/>
                </form>
                {/*Input form*/}

                {/*filter*/}
                <div className='consumers-filter'>
                    <div className='consumers-filter__item'>
                        <p>Period:</p>

                        <button className='buttonDb consumers-filter__item__button' onClick={() => setMenu(!menu)}>{`(${period})`}<img src={arrow} alt="arrow" /></button>

                        <div className={`consumers-filter__item__list ${menu ? 'consumer-filter__item__list-active' : '' }`}>
                            {periods.map(period => {
                                return <button className='buttonDb consumers-filter__item__list__button' onClick={() => {setPeriod(period); setMenu(!menu)}}>{period}</button>
                            })}
                        </div>
                    </div>
                    <div className='consumers-filter__item'>
                        <p>Store Location:</p>

                        <button className='buttonDb consumers-filter__item__button' onClick={() => setMenuLocation(!menuLocation)}>{`(${location})`}<img src={arrow} alt="arrow" /></button>

                        <div className={`consumers-filter__item__list ${menuLocation ? 'consumer-filter__item__list-active' : '' }`}>
                            {locations.map(location => {
                                return <button className='buttonDb consumers-filter__item__list__button' onClick={() => {setLocation(location); setMenuLocation(!menuLocation)}}>{location}</button>
                            })}
                        </div>
                    </div>
                    <div className='consumers-filter__item-price'>
                        <p>Total revenue: <span>£150.00</span></p>
                    </div>
                </div>
                {/*filter*/}

                {/*list*/}
                <div className='consumers-list'>
                    <p>Table Available only on desctop</p>
                    <div className='consumers-list__header'>
                            <p>Order Placed</p>
                            <p>Order No. </p>
                            <p>Store Location</p>
                            <p>Customer</p>
                            <p>Value</p>
                    </div>
                    <div className='consumers-list__content'>
                            <ConsumerItem 
                                OrderPlaced={["27th May, 2022", "1.03pm"]} 
                                OrderNo={"#1234"}
                                StoreLocation={"Mike’s Chiswick"}
                                Customer={["Hailee Peterson", "Hailee.p@gmail.com"]}
                                Value={"£7.55"}
                            />
                            <ConsumerItem 
                                OrderPlaced={["27th May, 2022", "1.03pm"]} 
                                OrderNo={"#1234"}
                                StoreLocation={"Mike’s Chiswick"}
                                Customer={["Hailee Peterson", "Hailee.p@gmail.com"]}
                                Value={"£7.55"}
                            />
                            <ConsumerItem 
                                OrderPlaced={["27th May, 2022", "1.03pm"]} 
                                OrderNo={"#1234"}
                                StoreLocation={"Mike’s Chiswick"}
                                Customer={["Hailee Peterson", "Hailee.p@gmail.com"]}
                                Value={"£7.55"}
                            />
                            <ConsumerItem 
                                OrderPlaced={["27th May, 2022", "1.03pm"]} 
                                OrderNo={"#1234"}
                                StoreLocation={"Mike’s Chiswick"}
                                Customer={["Hailee Peterson", "Hailee.p@gmail.com"]}
                                Value={"£7.55"}
                            />
                    </div>
                </div>
                {/*list*/}
            </div>
        </div>
    </LayoutDashboard>
  )
}
