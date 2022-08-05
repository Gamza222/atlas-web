import React, {useState} from 'react'
import LayoutDashboard from '../bcomponets/LayoutDashboard/LayoutDashboard'
import carbon from '../../dashboardImages/carbonDbNL/carbondb-pic.svg'
import carbonSearch from '../../dashboardImages/carbonDbNL/carbonSearch.svg'
import { CgSearch } from 'react-icons/cg'
import { IoIosArrowUp } from 'react-icons/io'
import { AiOutlineCheck } from 'react-icons/ai'
import ProductNotLog from '../bcomponets/UI/productNotLog/productNotLog'
import CheckoutNL from '../bcomponets/UI/CheckoutNL/CheckoutNL'
import BoxDbLog from '../bcomponets/UI/BoxDbLog/BoxDbLog'
import {AiOutlineClose} from 'react-icons/ai'
import ProductLog from '../bcomponets/UI/ProductLog/ProductLog'

export default function CarbonDb() {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("Search for a sector");
  const [product, setProduct] = useState({});
  const [prodOpen, setProdOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
    const [filter, setFilter] = useState([]);
    const [discountW, setDiscountW] = useState(false);
    const [prodWin, setProdWin] = useState(false)

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

            <button className='carbondb__filter__button buttonDb' onClick={() => setSortOpen(!sortOpen)}>
                <p>Sort By</p>
                <IoIosArrowUp style={{transform: sortOpen ? "rotate(0deg)" : "rotate(180deg)"}}/>
            </button>
            <div className='carbondb__filter__list' style={{display: sortOpen ? "flex" : "none"}}>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Cost") !== -1 ? setFilter(filter.filter((item) => item !== "Cost"))
                        : setFilter([...filter, "Cost"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Cost") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Cost</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("CO2 Cost") !== -1 ? setFilter(filter.filter((item) => item !== "CO2 Cost"))
                        : setFilter([...filter, "CO2 Cost"])
                    }}>
                    <div>
                        {
                            filter.indexOf("CO2 Cost") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>CO2 Cost</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("CO2 Return") !== -1 ? setFilter(filter.filter((item) => item !== "CO2 Return"))
                        : setFilter([...filter, "CO2 Return"])
                    }}>
                    <div>
                        {
                            filter.indexOf("CO2 Return") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>CO2 Return</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Discount") !== -1 ? setFilter(filter.filter((item) => item !== "Discount"))
                        : setFilter([...filter, "Discount"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Discount") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Discount</p>
                </button>

                <button className='carbondb__filter__list__item buttonDb' onClick={() => {
                        filter.indexOf("Products Sold") !== -1 ? setFilter(filter.filter((item) => item !== "Products Sold"))
                        : setFilter([...filter, "Products Sold"])
                    }}>
                    <div>
                        {
                            filter.indexOf("Products Sold") !== -1 ?
                            <AiOutlineCheck />
                            : ''
                        }
                    </div>
                    <p>Products Sold</p>
                </button>

            </div>
        </div>
        <div className='carbodb__boxes'>
            <BoxDbLog name={"Yellow Sweater"} num={"10.00"} sold={"42"} returnNum={30} price={67} prevPrice={77} setProduct={setProduct} setDiscountW={setDiscountW} total={610.60} materials={26.58} manufacturing={500.88}  setProdWin={setProdWin} distribution={24.32} use={61.50} recycling={-8.68} maxDiscount={'5%'} />
            <BoxDbLog name={"Yellow Ball"} num={"10.00"} sold={"62"} returnNum={30} price={67} prevPrice={77} setProduct={setProduct} setDiscountW={setDiscountW} total={310.60} materials={23.58} manufacturing={300.88}  setProdWin={setProdWin} distribution={34.32} use={31.50} recycling={-3.68} maxDiscount={'7%'} />
            <BoxDbLog name={"Yellow Sweater"} num={"10.00"} sold={"72"} returnNum={30} price={67} prevPrice={77} setProduct={setProduct} setDiscountW={setDiscountW} total={410.60} materials={46.58} manufacturing={400.88}  setProdWin={setProdWin} distribution={44.32} use={41.50} recycling={-4.68} maxDiscount={'8%'} />
            <BoxDbLog name={"Yellow Ball"} num={"10.00"} sold={"82"} returnNum={30} price={67} prevPrice={77} setProduct={setProduct} setDiscountW={setDiscountW} total={910.60} materials={96.58} manufacturing={900.88}  setProdWin={setProdWin} distribution={94.32} use={91.50} recycling={-9.68} maxDiscount={'9%'} />
            <BoxDbLog name={"Yellow Sweater"} num={"10.00"} sold={"32"} returnNum={30} price={67} prevPrice={77} setProduct={setProduct} setDiscountW={setDiscountW} total={210.60} materials={26.58} manufacturing={200.88}  setProdWin={setProdWin} distribution={24.32} use={21.50} recycling={-2.68} maxDiscount={'2%'} />
            <BoxDbLog name={"Yellow Ball"} num={"10.00"} sold={"92"} returnNum={30} price={67} prevPrice={77} setProduct={setProduct} setDiscountW={setDiscountW} total={810.60} materials={86.58} manufacturing={800.88}  setProdWin={setProdWin} distribution={84.32} use={81.50} recycling={-8.68} maxDiscount={'4%'} />
            <BoxDbLog name={"Yellow Sweater"} num={"10.00"} sold={"22"} returnNum={30} price={67} prevPrice={77} setProduct={setProduct} setDiscountW={setDiscountW} total={610.60} materials={26.58} manufacturing={500.88}  setProdWin={setProdWin} distribution={24.32} use={61.50} recycling={-8.68} maxDiscount={'6%'} />
            <BoxDbLog name={"Yellow Ball"} num={"10.00"} sold={"62"} returnNum={30} price={67} prevPrice={77} setProduct={setProduct} setDiscountW={setDiscountW} total={510.60} materials={56.58} manufacturing={500.88}  setProdWin={setProdWin} distribution={54.32} use={51.50} recycling={-5.68} maxDiscount={'9%'} />
            <BoxDbLog name={"Yellow Sweater"} num={"10.00"} sold={"82"} returnNum={30} price={67} prevPrice={77} setProduct={setProduct} setDiscountW={setDiscountW} total={710.60} materials={76.58} manufacturing={700.88}  setProdWin={setProdWin} distribution={74.32} use={71.50} recycling={-7.68} maxDiscount={'11%'} />
        </div>
        {
            product.name && prodWin? 
            <div className='carbondb__productBox'>
            <h5>{`${product.name} (Product ID)`}</h5>
            <div className='carbondb__productBox__description'>
                <div className='carbondb__productBox__description__image'>
                    {
                        product.image ? <img src="" alt="" /> : <p>Image<span>here</span></p>
                    }
                </div>
                <div className='carbondb__productBox__description__descr'>
                    <p className='carbondb__productBox__description__descr__discount'>Max Discount {product.maxDiscount}</p>
                    <p>{product.price}kg</p>
                    <p>{product.total}kg CO2</p>
                    <p>{product.returnNum}kg</p>
                </div>
                <p className='carbondb__productBox__description__total'>Total<span>{product.total}kg</span></p>
            </div>
            <p>Breakdown of Carbon Cost</p>
            <div className='carbondb__productBox__items'>
                <div className='carbondb__productBox__items__item'>
                    <img src="" alt="" />
                    <p>{product.materials}kg</p>
                    <p>Raw Materials</p>
                </div>
                <div className='carbondb__productBox__items__item'>
                    <img src="" alt="" />
                    <p>{product.manufacturing}kg</p>
                    <p>Manufacturing</p>
                </div>
                <div className='carbondb__productBox__items__item'>
                    <img src="" alt="" />
                    <p>{product.distribution}kg</p>
                    <p>Distribution</p>
                </div>
                <div className='carbondb__productBox__items__item'>
                    <img src="" alt="" />
                    <p>{product.use}kg</p>
                    <p>Use of Product</p>
                </div>
                <div className='carbondb__productBox__items__item'>
                    <img src="" alt="" />
                    <p>{product.recycling}kg</p>
                    <p>Recycling</p>
                </div>
            </div>  

            <button className='carbondbproductBoxbutton buttonDb' onClick={() => {setProduct({}); setProdWin(false)}}>
                <AiOutlineClose />
            </button>             
        </div>
        : ''
        }
        {
              discountW ? <ProductLog /> 
              : ''
            }
    </div>
    
        
    </LayoutDashboard>
  )
}
