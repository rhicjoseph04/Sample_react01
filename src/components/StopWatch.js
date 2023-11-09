// import {useState, useRef} from 'react';

// function StopWatch(){
//     let [second, setSecond] = useState(0);
//     const timer = useRef();

//     let start = () => {
//         let time = document.getElementById("time");
//         time.style.backgroundColor = "yellow";
//         timer.current = setInterval(() => setSecond(second => second + 1),1000)
//     }

//     let stop = () => {
//         clearInterval(timer.current)
//         let time = document.getElementById("time");
//         time.style.backgroundColor = "Red";
//     }

//     let reset = () => {
//         clearInterval(timer.current)
//         setSecond(0)
//         let time = document.getElementById("time");
//         time.style.backgroundColor = "White";
//     }
    
//     return(
//         <div>
//             <h1 id="time">{second}</h1>
//             <button onClick={start}>Start</button>
//             <button onClick={stop}>Stop</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }

// export default StopWatch;