import React, {useState} from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import carbon from '../../dashboardImages/carbonDbNL/carbondb-pic.svg'
import carbonSearch from '../../dashboardImages/carbonDbNL/carbonSearch.svg'
import { CgSearch } from 'react-icons/cg'
import ProductNotLog from '../bcomponets/UI/productNotLog/productNotLog'
import CheckoutNL from '../bcomponets/UI/CheckoutNL/CheckoutNL'
import ProductLog from '../bcomponets/UI/ProductLog/ProductLog'

export default function CarbonDbAll() {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("Search for a sector");
  const [product, setProduct] = useState({});
  const [discountW, setDiscountW] = useState(false);
  console.log(product)
  return (
    <LayoutDashboard 
      add={
          <div className='header-add'>
            <div>
              <h2>Carbon Database</h2>
              <img src={carbon} alt="" style={{height: "76px", width: "76px", marginLeft: "22px", marginTop: "-15px"}} />
            </div>
            <form action="" className={`consumers-search ${focus ? 'isFocus' : ''}`}>
                        <img src={carbonSearch} alt="search-pic" />
                        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search for a sector" className='consumers-search__input' onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/>
                        <input type="submit" hidden/>
                    </form>
          </div>} 
      headerDel={true}
      >

        <div className='carbon-unlog'>
          <h2>Pick a sector to offset</h2>
          <div className='carbon-unlog__cards'>
              <ProductNotLog name={'Fashion'} text={"Some explaning text here, about the sector"} color={"#D9E3FE"} setProduct={setProduct} beforeNum={"1000"} afterNum={"500"} />
              <ProductNotLog name={'Electronics'} text={"Some explaning text here, about the sector"} color={"#95DCAE"} setProduct={setProduct} beforeNum={"1000"} afterNum={"500"}/>
              <ProductNotLog name={'Cafes & Coffee Shops'} text={"Some explaning text here, about the sector"} color={"#FFE1D9"} setProduct={setProduct} beforeNum={"1000"} afterNum={"500"}/>
              <ProductNotLog name={'Cafes & Coffee Shops'} text={"Some explaning text here, about the sector"} color={"#D9E3FE"} setProduct={setProduct} beforeNum={"1000"} afterNum={"500"}/>
              <ProductNotLog name={'Furniture'} text={"Some explaning text here, about the sector"} color={"#E6DDFF"} setProduct={setProduct} beforeNum={"1000"} afterNum={"500"}/>
              <ProductNotLog name={'Hotels'} text={"Some explaning text here, about the sector"} color={"rgba(183, 210, 229, 0.8)"} setProduct={setProduct} beforeNum={"1000"} afterNum={"500"}/>
              <ProductNotLog name={'Pubs & Bars'} text={"Some explaning text here, about the sector"} color={"#FFEDD9"} setProduct={setProduct} beforeNum={"1000"} afterNum={"500"}/>
              <ProductNotLog name={'Mix of Sectors'} text={"Some explaning text here, about the sector"} color={"#E5FFD9"} setProduct={setProduct} beforeNum={"1000"} afterNum={"500"}/>
          </div>
          
            {
              product.name !== undefined ?
              <CheckoutNL name={product.name} beforeNum={product.beforeNum} afterNum={product.afterNum} price={200.00} setProduct={setProduct} product={product} style={{display: product.name ? "none" : "flex"}}/>
              : ""
            }
            {
              discountW ? <ProductLog /> 
              : ''
            }
        </div>
    </LayoutDashboard>
  )
}
