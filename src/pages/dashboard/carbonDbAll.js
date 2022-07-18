import React, {useState} from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import carbon from '../../dashboardImages/carbonDbNL/carbondb-pic.svg'
import carbonSearch from '../../dashboardImages/carbonDbNL/carbonSearch.svg'
import { CgSearch } from 'react-icons/cg'
import ProductNotLog from '../bcomponets/UI/productNotLog/productNotLog'

export default function CarbonDbAll() {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("Search for a sector");

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
              <ProductNotLog name={'Fashion'} text={"Some explaning text here, about the sector"} color={"#D9E3FE"} />
              <ProductNotLog name={'Electronics'} text={"Some explaning text here, about the sector"} color={"#95DCAE"} />
              <ProductNotLog name={'Cafes & Coffee Shops'} text={"Some explaning text here, about the sector"} color={"#FFE1D9"} />
              <ProductNotLog name={'Cafes & Coffee Shops'} text={"Some explaning text here, about the sector"} color={"#D9E3FE"} />
              <ProductNotLog name={'Furniture'} text={"Some explaning text here, about the sector"} color={"#E6DDFF"} />
              <ProductNotLog name={'Hotels'} text={"Some explaning text here, about the sector"} color={"rgba(183, 210, 229, 0.8)"} />
              <ProductNotLog name={'Pubs & Bars'} text={"Some explaning text here, about the sector"} color={"#FFEDD9"} />
              <ProductNotLog name={'Mix of Sectors'} text={"Some explaning text here, about the sector"} color={"#E5FFD9"} />
          </div>
        </div>
    </LayoutDashboard>
  )
}
