// import {useState, useRef} from 'react';

// function CountRender () {
//     let [value, setValue] = useState('');
//     let renderCount = useRef(0);
    
//     const changingInput = (e) =>{
//         setValue(e.target.value)
//         renderCount.current++;
//     }
//     return(
//         <div>
//             <input type='text' onChange={changingInput}/>
//             <br></br><br></br>
//             {value}
//             <br/><br/>
//             <p>Number of renders: {renderCount.current}</p> 
//         </div>
//     )
// }

// export default CountRender;