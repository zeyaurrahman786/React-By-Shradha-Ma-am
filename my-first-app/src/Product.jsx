// import "./Product.css"

// function Product (props) {
//     // console.log(props.title);
    
//     return (
//         <div className="Product">
//             {/* <h3>Product Title</h3> */}
//             <h3>{props.title}</h3>
//             <h5>Product Description</h5>
//         </div>
//     )
// }

// export default Product;








// Use destructuring to extract title from props

// import "./Product.css"

// function Product ({ title, price = 1}) {
    
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Rs. {price}</h5>
//         </div>
//     )
// }

// export default Product;






// Passing Arrays to Props

// import "./Product.css"

// function Product ({ title, price, features, features2 }) {
//     // console.log(features);
    
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Rs. {price}</h5>
//             <p>{features}</p>
//             <p>{features2.a}</p>
//         </div>
//     )
// }

// export default Product;



// import "./Product.css"

// function Product ({ title, price, features }) {
//     // console.log(features);
//     // const list = features.map((feature) => <li>{feature}</li>);
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Rs. {price}</h5>
//             {/* <p>{features}</p> */}
//             {/* <p>{list}</p> */}
//             <p>{features.map((feature) => <li>{feature}</li>)}</p>
//         </div>
//     )
// }

// export default Product;







// Adding elements on the basis of condition.

// import "./Product.css"

// function Product ({ title, price }) {
//     if (price >= 30000){
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Rs. {price}</h5>
//             <p>Discount of 5%</p>
//         </div>
//     );
//     } else {
//         return (
//             <div className="Product">
//                 <h3>{title}</h3>
//                 <h5>Rs. {price}</h5>
//             </div>
//         );
//     }
// }

// export default Product;



// import "./Product.css"

// function Product ({ title, price }) {
//     // let isDiscount = price >= 30000 ? "Discount of 5%" : "";
//     return (
//         <div className="Product">
//             <h3>{title}</h3>
//             <h5>Rs. {price}</h5>
//             {/* <p>{isDiscount}</p> */}
//             {/* <p>{price >= 30000 ? "Discount of 5%" : ""}</p> */}
//             {/* {price >= 30000 ? "Discount of 5%" : null} */}
//             {/* {price >= 30000 ? <p>Discount of 5%</p> : null} */}
//             {/* {price >= 30000 ? <p>Discount of 5%</p> : <p>No Discount</p>} */}
//             {price >= 30000 && <p>Discount of 5%</p>}
//         </div>
//     );
// }

// export default Product;






// Dynamic Component Styling

import "./Product.css"

function Product ({ title, price }) {
    // let styles = {backgroundColor: "yellow"};
    // let styles = {backgroundColor: price >= 30000 ? "yellow" : ""};
    let isDiscount = price >= 30000;
    let styles = {backgroundColor: isDiscount ? "yellow" : "red"};
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Rs. {price}</h5>
            {price >= 30000 && <p>Discount of 5%</p>}
        </div>
    );
}

export default Product;