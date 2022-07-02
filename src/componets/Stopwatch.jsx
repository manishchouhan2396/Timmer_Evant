import React, { useState } from 'react'
import { useRef } from 'react'
import "../componets/stopStyle.css"

const Stopwatch = (props) => {

  const [watch1, setWatch1] = useState(props.second);
  const [watch2, setWatch2] = useState(props.second)
  const [watch3, setWatch3] = useState(props.second)

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  if(watch2===60){
    setWatch2(0)
  }

  if(watch3===60){
    setWatch3(0)
  }

  const start = () => {

    if(ref1.current !== null) return;

    ref1.current = setInterval(() =>{
      setWatch1((prev) => prev + 1);
    }, 60000)


    if(ref2.current !== null) return;

    ref2.current = setInterval(() =>{
      setWatch2((prev) => prev + 1);
    }, 1000)


    if(ref3.current !== null) return;

    ref3.current = setInterval(() =>{
      setWatch3((prev) => prev + 1);
    }, 0.001)

  }
  const pause = () => {
    clearInterval(ref1.current);
    clearInterval(ref2.current);
    clearInterval(ref3.current);
    ref1.current = null
    ref2.current = null
    ref3.current = null
  }
  const reset = () => {
    pause()
    setWatch1(0);
    setWatch2(0);
    setWatch3(0);
  }

  // console.log(watch2)
  return (
    <div id="timmer">
      <div>StopWatch</div>
      <div>{`${watch1} Min ${watch2} Sec ${watch3} MiliSec`}</div>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
