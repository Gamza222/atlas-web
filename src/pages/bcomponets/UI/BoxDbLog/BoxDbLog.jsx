import React from 'react'
import * as classes from './BoxDbLog.module.scss'

export default function BoxDbLog({pic, name, num, sold, returnNum, price, prevPrice, setProduct, materials, manufacturing, distribution, use, recycling, maxDiscount, total}) {
  return (
    <button className={`${classes.container} buttonDb`} onClick={() => setProduct(
        {
            name: name,
            price: price,
            materials: materials,
            manufacturing: manufacturing,
            distribution: distribution,
            use: use,
            recycling: recycling,
            returnNum: returnNum,
            maxDiscount: maxDiscount,
            total: total
        }
    )}>
        <div className={classes.container__img}>
            {pic ? <img src={pic} alt="" /> : <div />}
        </div>
        <h3>{name}</h3>
        <div className={classes.container__description}>
            <div className={classes.container__description__num}>
                <div />
                {
                    num ? <p>{num.split('').slice(0, num.indexOf('.'))}<span>{num.split('').slice(num.indexOf('.'))}</span></p> : ''
                }
            </div>
            <div className={classes.container__description__sold}>
                <p>{`> ${sold} Sold`}</p>
            </div>
        </div>
        <p className={classes.container__returnNum}>CO2 Return: {returnNum}</p>
        <div className={classes.container__price}>
            <p>${price}</p>
            <p>${prevPrice}</p>
        </div>
        <button className='buttonDb'>
            Edit %
        </button>
    </button>
  )
}