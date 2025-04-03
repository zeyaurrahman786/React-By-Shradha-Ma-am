import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'
import TicketNum from './TicketNum'

function App() {

  return (
    <>
      {/* <Lottery /> */}
      {/* <TicketNum num={5}/>
      <TicketNum num={4}/>
      <TicketNum num={2}/> */}

      {/* <Ticket ticket={[0, 1, 2]}/>
      <Ticket ticket={[5, 6, 7]}/> */}

      <Lottery n={3} winningSum={15}/>
    </>
  )
}

export default App
