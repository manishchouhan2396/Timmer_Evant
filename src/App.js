import './App.css';
import  { useState } from 'react';
import Stop from './componets/Stopwatch'
import Timer from './componets/Timer'
function App() {

  const [toggle , setToggle] = useState(false); 
  return (
    <div className="App">
      <button onClick = {()=> setToggle(!toggle)}>{!toggle ? "Show data" : "Show data2"}</button>
      {toggle ? <Stop second={0}/> : <Timer/>}
    </div>
  );
}

export default App;
