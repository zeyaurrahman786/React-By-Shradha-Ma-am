// Objects and State

// import React, { useState } from 'react';
// export default function LudoBoard() {

//     let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

//     let updateBlue = () => {
//         setMoves((prevMoves) => {
//             return {...prevMoves, blue: prevMoves.blue + 1}
//         });
//     }

//     let updateYellow = () => {
//         setMoves((prevMoves) => {
//             return {...prevMoves, yellow: prevMoves.yellow + 1}
//         });
//     }

//     let updateGreen = () => {
//         setMoves((prevMoves) => {
//             return {...prevMoves, green: prevMoves.green + 1}
//         });
//     }

//     let updateRed = () => {
//         setMoves((prevMoves) => {
//             return {...prevMoves, red: prevMoves.red + 1}
//         });
//     }

//     return (
//         <div>
//             <h1>Game Begins!</h1>
//             <div className="board" style={{border: "1px solid white", width: "300px", height: "420px"}}>
//                 <p> Blue moves = {moves.blue}</p>
//                 <button style={{background: "blue"}} onClick={updateBlue}>+1</button>
//                 <p>Yellow moves = {moves.yellow}</p>
//                 <button style={{background: "yellow"}} onClick={updateYellow}>+1</button>
//                 <p>Green moves = {moves.green}</p>
//                 <button style={{background: "green"}} onClick={updateGreen}>+1</button>
//                 <p>Red moves = {moves.red}</p>
//                 <button style={{background: "red"}} onClick={updateRed}>+1</button>
//             </div>
//         </div>
//     )
// } 









// Arrays and State

import React, { useState } from 'react';
export default function LudoBoard() {

    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

    let [array, setArray] = useState(["No Moves"]);

    let updateBlue = () => {
        // setMoves((prevMoves) => {
        //     return {...prevMoves, blue: prevMoves.blue + 1}
        // });

        setArray((prevArray) => { 
            return [...prevArray, "Blue Moves"]
        });
        console.log(array);
    };

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1}
        });
    }

    let updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1}
        });
    }

    let updateRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1}
        });
    }

    return (
        <div>
            <h1>Game Begins!</h1>
            <p>{array}</p>
            <div className="board" style={{border: "1px solid white", width: "300px", height: "420px"}}>
                <p> Blue moves = {moves.blue}</p>
                <button style={{background: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{background: "yellow"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{background: "green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{background: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
} 