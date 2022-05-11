import React from 'react'
import Graph from './Graph/Graph'
import * as classes from './Product.module.scss'
import Graph1 from '../../../../images/graph1.png'
import Graph2 from '../../../../images/graph2.png'

export default function Product() {
  return (
    <section className={classes.product} id="product">
        <div className={classes.product__container}>
            <h1>OUR PRODUCT</h1>
            <div className={classes.product__container__graphs}>
                {/*grapgh components */}
                <Graph 
                    header={"over time"} 
                    adding={"Monthly"} 
                    letter={"Measure"} 
                    text={<p>measure your emissions. <br />descriptive text here</p>} 
                    children={
                        <img src={Graph1} alt="" className={classes.grapghImage}/>
                    } 
                />

                <Graph 
                    header={"over time"} 
                    adding={"Monthly"} 
                    letter={"Analyze"} 
                    text={<p>analyze your emissions. <br />descriptive text here</p>} 
                    children={
                        <img src={Graph2} alt="" className={classes.grapghImage}/>
                    } 
                />

                <Graph 
                    header={"over time"} 
                    letter={"Reduce"} 
                    text={<p>reduce your emissions. <br /> descriptive text here</p>} 
                    children={
                        <img src={Graph2} alt="" className={classes.grapghImage}/>
                    } 
                />
                
                <Graph 
                    header={"over time"} 
                    letter={"Subsidize"} 
                    text={<p>subsidize your products.<br /> descriptive text here</p>} 
                    children={
                        <img src={Graph2} alt="" className={classes.grapghImage}/>
                    } 
                />
                {/*grapgh components */}
            </div>
            <button>Request a Demo  </button>
        </div>
    </section>
  )
}