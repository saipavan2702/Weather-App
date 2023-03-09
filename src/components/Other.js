import React from 'react'

const Other = ({f,w}) => {
  return (
    <div className='Lo'>
      <div className='feels'>
        <p>Feels Like</p>
        {f?<p>{((f.feels_like-32)/1.8).toFixed()} °C</p>:null}
      </div>
      <div className='Hum'>
        <p>Humidity</p>
        {f?<p>{f.humidity}%</p>:null}
      </div>
      <div className='Win'>
        <p>Wind speed</p>
        {w.wind?<p>{w.wind.speed} MPH</p>:null}
      </div>
    </div>
  )
}

export default Other
