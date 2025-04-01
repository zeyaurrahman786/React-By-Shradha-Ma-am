// import Product from "./Product";

// function ProductTab () {
//     let option = ["Hi-Tech", "Durable", "Faster"];
//     let option2 = {a: "Hi-Tech", b: "Durable", c: "Faster"};

//     return (
//         <div>
//             <Product title="Phone" price={25000} features={option} features2={option2}/>
//             {/* <Product title="Laptop" price={75000} />
//             <Product title="Car" price={2500000} /> */}
//         </div>
//     )
// }

// export default ProductTab;






// Passing Arrays to Props

// import Product from "./Product";

// function ProductTab () {
//     // let option = ["Hi-Tech", "Durable", "Faster"];
//     // let option2 = {a: "Hi-Tech", b: "Durable", c: "Faster"};

//     return (
//         <div>
//             {/* <Product title="Phone" price={25000} features={["Hi-Tech", "Durable", "Faster"]}/> */}
//             <Product title="Phone" price={25000} features={{a: "Hi-Tech", b: "Durable", c: "Faster"}}/>
//             {/* <Product title="Laptop" price={75000} />
//             <Product title="Car" price={2500000} /> */}
//         </div>
//     )
// }

// export default ProductTab;






// Rendering Arrays

// import Product from "./Product";

// function ProductTab () {
//     let option = ["Hi-Tech", "Durable", "Faster"];
//     // let option = [<li>"Hi-Tech"</li>, <li>"Durable"</li>, <li>"Faster"</li>];
//     // let option2 = {a: "Hi-Tech", b: "Durable", c: "Faster"};

//     return (
//         <div>
//             {/* <Product title="Phone" price={25000} features={["Hi-Tech", "Durable", "Faster"]}/> */}
//             {/* <Product title="Phone" price={25000} features={{a: "Hi-Tech", b: "Durable", c: "Faster"}}/> */}
//             <Product title="Phone" price={25000} features={option}/>
//             {/* <Product title="Laptop" price={75000} />
//             <Product title="Car" price={2500000} /> */}
//         </div>
//     )
// }

// export default ProductTab;







// Adding elements on the basis of condition.

// import Product from "./Product";

// function ProductTab () {

//     return (
//         <div>
//             <Product title="Phone" price={25000} />
//             <Product title="Laptop" price={75000} />
//             <Product title="Car" price={2500000} />
//         </div>
//     )
// }

// export default ProductTab;








// Dynamic Component Styling

import Product from "./Product";

function ProductTab () {

    return (
        <div>
            <Product title="Phone" price={25000} />
            <Product title="Laptop" price={75000} />
            <Product title="Car" price={2500000} />
        </div>
    )
}

export default ProductTab;