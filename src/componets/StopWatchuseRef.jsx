import React, { useRef, useState } from "react";
import "../componets/stopStyle.css";

const StopWatchuseRef = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const starStopWatch = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const stopStopWatch = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const resetStopWatch = () => {
    stopStopWatch();
    setCount(0);
  };

  return (
    <div className="timmerRef">
      <div>
        StopWatch <span>{count}</span> Sec
      </div>
      <br />
      <div>
        <button onClick={starStopWatch}>Start</button>
        <button onClick={stopStopWatch}>Stop</button>
        <button onClick={resetStopWatch}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatchuseRef;
