import './App.css';
import Node from './components/Node';
import Other from './components/Other';
import axios from 'axios';
import { useState } from 'react';
import background from "./9.jpg";

function App() {

  const [data, setData]=useState({})
  const [location, setLocation]=useState('')

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2d1184daa9d633d49715f46047793485`

  const findLoc=(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((res)=>{
        setData(res.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App"  style={{ backgroundImage:`url(${background})`}}>
     <div className='find'>
      <input value={location} onChange={event=>setLocation(event.target.value)} onKeyPress={findLoc} placeholder='Enter Location...🗺️'/>
     </div>
     <div className='tot'>
      <Node loc={data.name} u={data.main} v={data.weather}/>
      {data.name!==undefined &&
        <Other f={data.main} w={data}/>
      }
     </div>
    </div>
  );
}

export default App;
