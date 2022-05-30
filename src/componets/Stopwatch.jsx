import React, { useState } from 'react'
import "../componets/stopStyle.css"

const Stopwatch = (props) => {

  const [timerId1, setTimerId1] = useState(null)
  const [timerId2, setTimerId2] = useState(null)
  const [timerId3, setTimerId3] = useState(null)
  const [watch1, setWatch1] = useState(props.second);
  const [watch2, setWatch2] = useState(props.second)
  const [watch3, setWatch3] = useState(props.second)

  if(watch2===60){
    setWatch2(0)
  }

  if(watch3===60){
    setWatch3(0)
  }

  const start = () => {
    if (!timerId1) {
      let id1 = setInterval(() => {
        setWatch1((prev) => prev + 1);

      }, 60000);
      setTimerId1(id1)
    };




    if (!timerId2) {
      let id2 = setInterval(() => {
        setWatch2((prev) => prev + 1);
      }, 1000);
      setTimerId2(id2)
    };



    if (!timerId3) {
      let id3 = setInterval(() => {
        setWatch3((prev) => prev + 1);

      }, 0.001);
      setTimerId3(id3)
    };

  }
  const pause = () => {
    clearInterval(timerId1);
    clearInterval(timerId2);
    clearInterval(timerId3);
    setTimerId1(null)
    setTimerId2(null)
    setTimerId3(null)
  }
  const reset = () => {
    clearInterval(timerId1);
    clearInterval(timerId2);
    clearInterval(timerId3);
    setWatch1(0);
    setWatch2(0);
    setWatch3(0);
    setTimerId1(null)
    setTimerId2(null)
    setTimerId3(null)
  }
  return (
    <div id="timmer">
      <div>StopWatch</div>
      <div> <snap>{watch1} : {watch2} : {watch3}</snap> sec</div>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
