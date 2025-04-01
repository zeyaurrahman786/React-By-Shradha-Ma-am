import './App.css'
// import Title from "./Title";
import { Title } from "./Title";
import Product from "./Product";
import ProductTab from './ProductTab';
import MsgBox from './MsgBox';

// function Title() {
//   return <h1>My First React App</h1>;
// }

// function Description () {
//   return <p>This is a simple React app.</p>;
// }

function App() {
  return (<div>
    {/* <button>Click me!</button> */}
    {/* <Title /> */}
    {/* <Description /> */}
    {/* <Title /> */}
    {/* <Description /> */}
    {/* <Title /> */}
    {/* <Product />
    <Product />
    <Product /> */}
    {/* <ProductTab /> */}
    <MsgBox userName="Zeyaur" textColor="blue" />
    <MsgBox userName="Rahman" textColor="green" />
    <MsgBox userName="Zeyaur Rahman" textColor="red" />
  </div>
  );
}

export default App
