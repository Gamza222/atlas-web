import React, {useState} from 'react'
import * as classes from './GraphTimeDb.module.scss'

export default function GraphTheight(props) {
  const [gr, setGr] = useState(0);

  return (
    <div className={classes.graph}>
      <div className={classes.graph__7} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(7)} style={{height: props.height7, maxWidth: '100%'}}>
          <p className={classes.number} style={gr !== 7 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg7}kg</p>
          <p className={classes.number} style={gr !== 6 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg6}kg</p>
          <p className={classes.number} style={gr !== 5 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg5}kg</p>
          <p className={classes.number} style={gr !== 4 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg4}kg</p>
          <p className={classes.number} style={gr !== 3 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg3}kg</p>
          <p className={classes.number} style={gr !== 2 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg2}kg</p>
          <p className={classes.number} style={gr !== 1 ? {"display": 'none'} : {"display" : 'block'}}>{props.kg1}kg</p>
      </div>
      <div className={classes.graph__6} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(6)} style={{height: props.height6, maxWidth: '100%'}}>
        
      </div>
      <div className={classes.graph__5} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(5)} style={{height: props.height5, maxWidth: '100%'}}>
        
      </div>
      <div className={classes.graph__4} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(4)} style={{height: props.height4, maxWidth: '100%'}}>
        
      </div>
      <div className={classes.graph__3} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(3)} style={{height: props.height3, maxWidth: '100%'}}>
        
      </div>
      <div className={classes.graph__2} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(2)} style={{height: props.height2, maxWidth: '100%'}}>
        
      </div>
      <div className={classes.graph__1} onMouseLeave={() => setGr(0)} onMouseEnter={() => setGr(1)} style={{height: props.height1, maxWidth: '100%'}}>
        
        <p className={classes.month}>{props.month}</p>
      </div>
    </div>
  )
}
