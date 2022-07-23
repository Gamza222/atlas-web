import React, {useState} from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import carbon from '../../dashboardImages/carbonDbNL/carbondb-pic.svg'
import carbonSearch from '../../dashboardImages/carbonDbNL/carbonSearch.svg'
import { CgSearch } from 'react-icons/cg'
import { IoIosArrowUp } from 'react-icons/io'
import { AiOutlineCheck } from 'react-icons/ai'
import ProductNotLog from '../bcomponets/UI/productNotLog/productNotLog'
import CheckoutNL from '../bcomponets/UI/CheckoutNL/CheckoutNL'

export default function CarbonDb() {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("Search for a sector");
  const [product, setProduct] = useState({});
  const [prodOpen, setProdOpen] = useState(false);
    const [filter, setFilter] = useState([]);

  console.log(filter)
  console.log(filter.indexOf("Sweaters"))
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

    <div className='carbondb'>
        <div className='carbondb__filter'>
            <button className='carbondb__filter__button buttonDb' onClick={() => setProdOpen(!prodOpen)}>
                <p>Product Categories</p>
                <IoIosArrowUp style={{transform: prodOpen ? "rotate(0deg)" : "rotate(180deg)"}}/>
            </button>
            <div className='carbondb__filter__list' style={{display: prodOpen ? "flex" : "none"}}>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Sweaters") !== -1 ? setFilter(filter.filter((item) => item !== "Sweaters"))
                        : setFilter([...filter, "Sweaters"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Sweaters") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Sweaters</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Shirts") !== -1 ? setFilter(filter.filter((item) => item !== "Shirts"))
                        : setFilter([...filter, "Shirts"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Shirts") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Shirts</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Trousers") !== -1 ? setFilter(filter.filter((item) => item !== "Trousers"))
                        : setFilter([...filter, "Trousers"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Trousers") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Trousers</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Skirts") !== -1 ? setFilter(filter.filter((item) => item !== "Skirts"))
                        : setFilter([...filter, "Skirts"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Skirts") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Skirts</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Jackets") !== -1 ? setFilter(filter.filter((item) => item !== "Jackets"))
                        : setFilter([...filter, "Jackets"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Jackets") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Jackets</p>
                </button>

            </div>

            <div className='carbondb__filter__line'/>

            <button className='carbondb__filter__button buttonDb' onClick={() => setProdOpen(!prodOpen)}>
                <p>Product Categories</p>
                <IoIosArrowUp style={{transform: prodOpen ? "rotate(0deg)" : "rotate(180deg)"}}/>
            </button>
            <div className='carbondb__filter__list' style={{display: prodOpen ? "flex" : "none"}}>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Sweaters") !== -1 ? setFilter(filter.filter((item) => item !== "Sweaters"))
                        : setFilter([...filter, "Sweaters"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Sweaters") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Sweaters</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Shirts") !== -1 ? setFilter(filter.filter((item) => item !== "Shirts"))
                        : setFilter([...filter, "Shirts"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Shirts") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Shirts</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Trousers") !== -1 ? setFilter(filter.filter((item) => item !== "Trousers"))
                        : setFilter([...filter, "Trousers"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Trousers") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Trousers</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Skirts") !== -1 ? setFilter(filter.filter((item) => item !== "Skirts"))
                        : setFilter([...filter, "Skirts"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Skirts") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Skirts</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Jackets") !== -1 ? setFilter(filter.filter((item) => item !== "Jackets"))
                        : setFilter([...filter, "Jackets"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Jackets") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Jackets</p>
                </button>

            </div>
        </div>
    </div>

        
    </LayoutDashboard>
  )
}
