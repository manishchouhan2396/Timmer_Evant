import React, { useEffect, useState } from 'react'
import "../componets/stopStyle.css"

const Timer = () => {
    const [timer, setTimer] = useState( 30);

    useEffect(() => {
        const id = setInterval(() => {
          
            if(timer<1){
                clearInterval(id);
                alert("Wake up Madhu Wake up Scrum is on")
            }else{
                setTimer((prev) => (prev -1));
            }
        }, 1000)

        return () => {

            clearInterval(id);
        }

    }, [timer]);
    return (
        <div id="timmer">
            <div>Count Down : <snap>{timer}</snap> Sec</div>
            {/* <input type="number"  setTimer(timer) /> */}
        </div>
    )
}

export default Timer
