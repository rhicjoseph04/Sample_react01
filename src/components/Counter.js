// import {useState} from 'react';

// function Counter(){
//     let [count, setCount] = useState(0);
   
//     let inc = () => {
//         let time = document.getElementById("count");
//         time.style.backgroundColor = "yellow";
//         setCount(prev => prev + 5)
//     }

//     let dec = () => {
//         setCount(prev => prev - 5)
//         let time = document.getElementById("count");
//         time.style.backgroundColor = "Red";
//     }

//     let reset = () => {
//         setCount(0)
//         let time = document.getElementById("count");
//         time.style.backgroundColor = "White";
//     }
    
//     return(
//         <div>
//             <h1 id="count">{count}</h1>
//             <button onClick={inc}>+5</button>
//             <button onClick={dec}>-5</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }

// export default Counter;