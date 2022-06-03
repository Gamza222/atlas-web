import React, {useState} from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import consumersPic from '../../dashboardImages/consumers-pic.svg'
import { CgSearch } from 'react-icons/cg'
import arrow from '../../dashboardImages/arrow-blue.svg'
import ConsumerItem from '../bcomponets/UI/ConsumersItem/ConsumerItem'

const locations = [
    'Mike’s Chiswick',
    'Mike’s Chiswick',
    'Mike’s Chiswick',
];

const periods = [
    '1 June - 31 June',
    '1 July - 31 July',
    '1 July - 31 August',
]

const data = [
    {
        date: <p>{`27th May, 2022`}<span>{`1.03pm`}</span></p>,
        order: '#1234',
        store: 'Mike’s Chiswick',
        customer: <p>{`Hailee Peterson`}<span>{`Hailee.p@gmail.com`}</span></p>,
        value: '£7.55'
    }
    
];

    

export default function Consumers() {
const [focus, setFocus] = useState(false);
const [menu, setMenu] = useState(false);

const [menuLocation, setMenuLocation] = useState(false);
const [period, setPeriod] = useState(periods[0]);
const [location, setLocation] = useState(0);


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

                        {data.map(elem => {
                            return (
                                <ConsumerItem 
                                OrderPlaced={elem.date}
                                OrderNo={elem.order}
                                StoreLocation={elem.store}
                                Customer={elem.customer}
                                Value={elem.value}
                            />
                            )
                        })}
                    </div>
                </div>
                {/*list*/}
            </div>
        </div>
    </LayoutDashboard>
  )
}
