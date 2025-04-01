import "./Product.css"
import Price from "./Price";

function Product({ title, idx }) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let description = [
        ["8,000 DPI", "5 Programmable Buttons"],
        ["For iPad Pro 11-inch", "Backlit Keyboard"],
        ["Bluetooth Speaker", "Bluetooth 5.0"],
        ["Wireless Mouse", "Wireless Keyboard"],
    ];
    return (
        <div className="Product">
            {/* <p>Title</p> */}
            <h4>{title}</h4>
            {/* <p>Description</p> */}
            {/* <p>{description[idx]}</p> */}
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            {/* <Price oldPrice="123" newPrice="345"/> */}
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;
