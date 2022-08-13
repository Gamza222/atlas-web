import React, {useState} from 'react'
import IECircle from '../IECircle/IECircle'
import YECircle from '../YECircle/YECircle'
import arrow from '../../../../dashboardImages/carbonDbNL/arrow-pic.svg'
import * as classes from './ProductLog.module.scss'
import {AiOutlineClose} from 'react-icons/ai'

export default function ProductLog({prevPrice, name, beforeNum, maxDiscount, afterNum, line, setProduct, product, setDiscountW}) {

    const [discount, setDiscount] = useState(maxDiscount);
    
  return (
    <div className={classes.container}>
      <button onClick={() => {setDiscountW(false); setProduct('')}} className='buttonDb'><AiOutlineClose /></button>
      <h3><span>Edit Carbon Discount for </span>'{name ? name : ''}'</h3>
      <div className={classes.container__edDisc}>
        <p>Edit Discount</p>
        <div>
            <input style={discount && discount.length !== 0 ? {width: discount.length + "ch"} : {}} type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} />
            
            <span>%</span>
        </div>
      </div>
      <div className={classes.container__price}>
        <p>New Price</p>
        <div>
            <p>${Math.round(prevPrice - (prevPrice / 100 * discount))}</p>
            <span>${prevPrice}</span>
        </div>
      </div>
      <div className={classes.container__circles}>
          <div className={classes.container__circles__item}>
              <p>Before</p>
              <div><IECircle Width={beforeNum / 5} Number={beforeNum} /></div>
              <p className={classes.container__circles__item__emissions}><span />current emissions</p>
          </div>

          <img className={classes.container__circles__arrow} src={arrow} />

          <div className={classes.container__circles__item}>
              <p>After</p>
              <div><YECircle Width2={beforeNum / 5} Width1={afterNum / 5} Number={afterNum} /></div>
              <p className={classes.container__circles__item__emissions}><span />emissions after offset</p>
              <p className={classes.container__circles__item__reduction}><span />total reduction</p>
          </div>
      </div>
        <div className={classes.container__sub}>
            <button className={classes.button} onClick={() => {
                let newProduct = product
                newProduct.maxDiscount = discount
                setProduct(newProduct);
            }} >Confirm Change</button>
          </div>
    </div>
  )
}
