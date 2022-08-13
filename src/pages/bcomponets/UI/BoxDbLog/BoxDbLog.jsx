import React from 'react'
import * as classes from './BoxDbLog.module.scss'

export default function BoxDbLog({beforeNum,afterNum, pic,setProdWin, name, num, sold,setDiscountW, returnNum, price, prevPrice, setProduct, materials, manufacturing, distribution, use, recycling, maxDiscount, total}) {
  return (
    <button className={`buttonDb containerCarbonAll ${classes.container}`} onClick={() => {setProduct(
        {
            name: name,
            price: price,
            prevPrice: prevPrice,
            materials: materials,
            manufacturing: manufacturing,
            distribution: distribution,
            use: use,
            beforeNum: beforeNum,
            afterNum: afterNum,
            recycling: recycling,
            returnNum: returnNum,
            maxDiscount: maxDiscount,
            total: total
        }
    ); setProdWin(true)}}>
        <div className={`${classes.container__img} containerCarbonAll__img`}>
            {pic ? <img src={pic} alt="" /> : <div />}
        </div>
        <h3>{name}</h3>
        <div className={`${classes.container__description} containerCarbonAll__description`}>
            <div className={`${classes.container__description__num}`}>
                <div />
                {
                    num ? <p>{num.split('').slice(0, num.indexOf('.'))}<span>{num.split('').slice(num.indexOf('.'))}</span></p> : ''
                }
            </div>
            <div className={`${classes.container__description__sold} containerCarbonAll__description__sold`}>
                <p>{`> ${sold} Sold`}</p>
            </div>
        </div>
        <p className={`${classes.container__returnNum} containerCarbonAll__returnNum`}>CO2 Return: {returnNum}</p>
        <div className={`${classes.container__price} containerCarbonAll__price`}>
            <p>${Math.round(prevPrice - (prevPrice / 100 * maxDiscount))}</p>
            <p>${prevPrice}</p>
        </div>
        <button  className='buttonDb' 
        onClick={() => {
            setProduct(
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
        );
        setDiscountW(true)
        }}>
            Edit %
        </button>
    </button>
  )
}