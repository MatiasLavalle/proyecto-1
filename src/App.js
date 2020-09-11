import React, {useState,useEffect} from 'react';
import { Marcadores } from './components/Marcadores';
import {Principal}  from './components/Principal';
import { TablasDePuntajes } from './components/TablasDePuntajes';

function App() {

  
  const [isRunning,setIsRunning]=useState(true);
  const [intervalId,setIntervalId]=useState(null);
  const [time, setTime]= useState({s:60});
  var updateS = time.s;

  const run =()=>{
    if(updateS>0){
      updateS--;
    }
    return setTime({s:updateS})
  }

  const start =()=>{
    run();
  }  
  
  const stop =()=>{
    setIsRunning(false)
  }

  
  // ----------------------------------------------------------------


  useEffect(()=>{
    if(isRunning){
      const timeId = setInterval(()=>{
        console.log('useEfect!!!')
        start()
      },1000);
      setIntervalId(timeId)
    }else{
      clearInterval(intervalId)
    }
  },[isRunning]);
    

  // ----------------------------------------------------------------
  
  return (
  <div className="body">
    <Marcadores/>
    <Principal start={start} stop={stop} time={time} />
    <TablasDePuntajes  time={time}/>
  </div>);
}

export default App;
