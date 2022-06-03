import React from 'react'

export default function GraphSite(props) {
  return (
    <div className='graphSite'>
      <div className='graph-site1' style={{width: props.GRSWidth1, maxWidth: '90%'}}>
          <p>{props.Name}</p>
      </div>
      <div style={{width: props.GRSWidth2, maxWidth: '100%'}} className='graph-site2'>
        <p>{props.Kg}</p>
      </div>
    </div>
  )
}
