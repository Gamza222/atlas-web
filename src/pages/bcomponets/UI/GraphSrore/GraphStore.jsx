import React, {useState} from 'react'
import * as classes from './GraphStore.module.scss'

export default function GraphStore(props) {
  const [gr, setGr] = useState(0);
  console.log(gr)
  return (
    <div className={classes.graph}>
      <div className={classes.graph__1} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(1)} style={{width: props.width1, maxWidth: '90%'}}>
          <p className={classes.store}>{props.store}</p>   
      </div>
      <div className={classes.graph__2} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(2)} style={{width: props.width2, maxWidth: '100%'}}>
        
      </div>
      <div className={classes.graph__3} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(3)} style={{width: props.width3, maxWidth: '100%'}}>
        
      </div>
      <div className={classes.graph__4} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(4)} style={{width: props.width4, maxWidth: '100%'}}>
        
      </div>
      <div className={classes.graph__5} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(5)} style={{width: props.width5, maxWidth: '100%'}}>
        
      </div>
      <div className={classes.graph__6} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(6)} style={{width: props.width6, maxWidth: '100%'}}>
        
      </div>
      <div className={classes.graph__7} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(7)} style={{width: props.width7, maxWidth: '100%'}}>
        <p className={classes.number} style={gr !== 1 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg1}kg</p>
        <p className={classes.number} style={gr !== 2 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg2}kg</p>
        <p className={classes.number} style={gr !== 3 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg3}kg</p>
        <p className={classes.number} style={gr !== 4 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg4}kg</p>
        <p className={classes.number} style={gr !== 5 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg5}kg</p>
        <p className={classes.number} style={gr !== 6 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg6}kg</p>
        <p className={classes.number} style={gr !== 7 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg7}kg</p>
      </div>
    </div>
  )
}
