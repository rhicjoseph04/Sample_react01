// import {useReducer} from 'react';

// const initialState = {    firstCounter : 0 };

// const reducer = (state, action) => {
//     switch (action.type){
//         case 'inc' : 
//         return {firstCounter: state.firstCounter + action.points};
//         case 'inc3' : 
//         return {firstCounter: state.firstCounter + action.points};
//         case 'dec' : 
//         return {firstCounter: state.firstCounter - action.points};
//         case 'reset' : 
//         return initialState;
//         default:
//             return state;
//     }
// }

// function Counter2(){
//     let [count, dispatch] = useReducer(reducer, initialState );
       
//     return(
//         <div>
//             <h1>{count.firstCounter}</h1>
//             <button onClick={() => dispatch({type: 'inc', points: 5})}>+5</button>
//             <button onClick={() => dispatch({type: 'inc3', points: 3})}>+3</button>
//             <button onClick={() => dispatch({type: 'dec', points: 5})}>-5</button>
//             <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
//         </div>
//     )
// }

// export default Counter2;