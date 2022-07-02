import './App.css';
import  { useState } from 'react';
import Stop from './componets/Stopwatch'
import Timer from './componets/Timer'
import StopWatch from "./componets/StopWatchuseRef"
function App() {

  const [toggle , setToggle] = useState(false); 
  return (
    <div className="App">
      <button className='btn' onClick = {()=> setToggle(!toggle)}>{!toggle ? "Show data" : "Show data2"}</button>
      {/* {toggle ? : <Timer/>} */}

      {toggle ?
      (<StopWatch/>): <Timer/>}

          <Stop second={0}/> 
    </div>
  );
}

export default App;
