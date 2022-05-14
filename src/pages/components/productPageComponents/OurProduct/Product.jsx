import React from 'react'
import Graph from './Graph/Graph'
import * as classes from './Product.module.scss'
import { Link } from 'gatsby'
import Graph1 from '../../../../images/graph1.png'
import Graph2 from '../../../../images/graph2.png'
import Graph3 from '../../../../images/graph3.png'

export default function Product() {
  return (
    <section className={classes.product} id="product">
        <div className={classes.product__container}>
            <h1>OUR PRODUCT</h1>
            <div className={classes.product__container__graphs}>
                {/*grapgh components */}
                <Graph 
                    supHeader={'Emmisions'}
                    header={"over time"} 
                    adding={"Monthly"} 
                    letter={"Measure"} 
                    text={<p>measure your emissions. <br />descriptive text here</p>} 
                    children={
                        <img src={Graph1} alt="" className={classes.grapghImage}/>
                    } 
                />

                <Graph 
                    supHeader={'Emmisions'}
                    header={"by category"} 
                    letter={"Analyze"} 
                    text={<p>analyze your emissions. <br />descriptive text here</p>} 
                    children={
                        <img src={Graph2} alt="" className={classes.grapghImage}/>
                    } 
                />

                <Graph 
                    supHeader={'Emmisions'}
                    header={"benchmark"} 
                    letter={"Reduce"} 
                    text={<p>reduce your emissions. <br /> descriptive text here</p>} 
                    children={
                        <img src={Graph3} alt="" className={classes.grapghImage}/>
                    } 
                />
                
                <Graph 
                    supHeader={'Low Carbon Item'}
                     
                    letter={"Subsidize"} 
                    text={<p>subsidize your products.<br /> descriptive text here</p>} 
                    children={
                        <img src={Graph2} alt="" className={classes.grapghImage}/>
                    } 
                />
                {/*grapgh components */}
            </div>
            <button><Link to="/requestDemo">Request a Demo</Link></button>
        </div>
    </section>
  )
}