// import React, {useState} from 'react';
// export default function Counter(){

//     // let count = 0;

//     // function increment(){
//     //     count += 1;
//     //     console.log(count);
//     // }

//     // function decrement(){
//     //     count -= 1;
//     //     console.log(count);
//     // }


//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1)
//         // console.log(count);
//     };
//     const decrement = () => {
//         setCount(count - 1)
//         // console.log(count);
//     };

//     return (
//         <div>
//         <h2>Counter App</h2>
//         <h3>Count = {count}</h3>
//         <button onClick={increment}>Increment</button>
//         &nbsp; &nbsp;
//         <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }







// Counter App

// import React, {useState} from 'react';
// export default function Counter(){

//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1)
//         // console.log(count);
//     };
//     const decrement = () => {
//         setCount(count - 1)
//     };

//     return (
//         <div>
//         <h2>Counter App</h2>
//         <h3>Count = {count}</h3>
//         <button onClick={increment}>Increment</button>
//         &nbsp; &nbsp;
//         <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }







// Re-render :- How does it work?

// import React, {useState} from 'react';
// export default function Counter(){

//     const [count, setCount] = useState(0); // initialization
//     console.log("Component is rendered!");
//     console.log(`count = ${count}`);

//     const increment = () => {
//         setCount(count + 1)
//         // console.log(count);
//         console.log(`inside incrementCount, count = ${count}`);
        
//     };
//     const decrement = () => {
//         setCount(count - 1)
//         // console.log(count);
//     };

//     return (
//         <div>
//         <h2>Counter App</h2>
//         <h3>Count = {count}</h3>
//         <button onClick={increment}>Increment</button>
//         &nbsp; &nbsp;
//         <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }







// Callback in Set State function

// import React, {useState} from 'react';
// export default function Counter() {

//     const [count, setCount] = useState(0);

//     // const increment = () => {
//     //     setCount(count + 1)        
//     //     setCount(count + 1)        
//     // };


//     let increment = () => {
//     //     setCount((prevCount) => {
//     //     return prevCount + 1;
//     // });
//     // setCount((prevCount) => {
//     //     return prevCount + 1;
//     // });
//     setCount(25);
// }

//     const decrement = () => {
//         setCount(count - 1)
//     };

//     return (
//         <div>
//         <h2>Counter App</h2>
//         <h3>Count = {count}</h3>
//         <button onClick={increment}>Increment</button>
//         &nbsp; &nbsp;
//         <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }








// More about State

// import React, {useState} from 'react';
// export default function Counter() {

//     const [count, setCount] = useState(0);
//     console.log("Component is rendered!");

//     let increment = () => {
//     //     setCount((prevCount) => {
//     //     return prevCount + 1;
//     // });
//     // setCount((prevCount) => {
//     //     return prevCount + 1;
//     // });
//     setCount(25);
// }

//     return (
//         <div>
//         <h2>Counter App</h2>
//         <h3>Count = {count}</h3>
//         <button onClick={increment}>Increment</button>
//         &nbsp; &nbsp;
//         {/* <button onClick={decrement}>Decrement</button> */}
//         </div>
//     )
// }




import React, {useState} from 'react';
export default function Counter() {

    function init(){
        console.log("init function is called!");
        return Math.random();
    }

    const [count, setCount] = useState(init);
    console.log("Component is rendered!");

    let increment = () => {
        setCount((prevCount) => {
        return prevCount + 1;
    });
}

    return (
        <div>
        <h2>Counter App</h2>
        <h3>Count = {count}</h3>
        <button onClick={increment}>Increment</button>
        &nbsp; &nbsp;
        {/* <button onClick={decrement}>Decrement</button> */}
        </div>
    )
}