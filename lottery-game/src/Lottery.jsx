// import { useState } from "react"
// import "./Lottery.css";
// import { generateTicket, sum } from "./helper";


// export default function Lottery() {

//     let [ticket, setTicket] = useState(generateTicket(3));

//     let isWinning = sum(ticket) == 15;

//     const handleBuyNewTicket = () => {
//         setTicket(generateTicket(3));
//     }

//     return (
//         <div>
//         <h1>Lottery Game!</h1>
//         <div className="ticket">
//             <span>{ticket[0]}</span>
//             <span>{ticket[1]}</span>
//             <span>{ticket[2]}</span>
//         </div>
//         <br />
//         <button onClick={handleBuyNewTicket}>Buy New Ticket</button>
//         <h3>{isWinning && "Congratulations 🎉, you won!"}</h3>
//         </div>
//     )
// }










import { useState } from "react"
import { generateTicket, sum } from "./helper";
import Ticket from "./Ticket";


export default function Lottery({n = 3, winningSum = 15}) {

    let [ticket, setTicket] = useState(generateTicket(3));

    let isWinning = sum(ticket) === winningSum;

    const handleBuyNewTicket = () => {
        setTicket(generateTicket(n));
    }

    return (
        <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <button onClick={handleBuyNewTicket}>Buy New Ticket</button>
        <h3>{isWinning && "Congratulations 🎉, you won!"}</h3>
        </div>
    )
}