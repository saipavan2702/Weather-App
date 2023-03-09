import React from 'react'

const Node = ({loc,u,v}) => {
  return (
    <div className='container'>
      <div className='place'>
        <h1>{loc}</h1>
      </div>
      <div className='Temp'>
        {u ? <p>{((u.temp-32)/1.8).toFixed()} °C</p> : null}
      </div>
      <div className='How'>
       {v? <p>{v[0].main}</p>:null}
      </div>
    </div>
  )
}

export default Node
