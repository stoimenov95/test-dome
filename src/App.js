// import React from "react";
// import { createRoot } from "react-dom/client";
// import Username from "./Username";
// import "./styles.css";

// // export default function App() {
// //   const Product = (props) => {
// //     const plus = () => {
// //       // Call props.onVote to increase the vote count for this product
// //       props.onVote(+1, props.index);
// //     };
// //     const minus = () => {
// //       // Call props.onVote to decrease the vote count for this product
// //       props.onVote(-1, props.index);
// //     };
// //     return (
// //       <li>
// //         <span>{props.product.name}</span> -{" "}
// //         <span>votes: {props.product.votes}</span>
// //         <button onClick={plus}>+</button> <button onClick={minus}>-</button>
// //       </li>
// //     );
// //   };

// //   const GroceryApp = (props) => {
// //     let [products, setProducts] = React.useState(props.products);
// //     const onVote = (dir, index) => {
// //       const newProducts = [...products];
// //       newProducts[index].votes += dir;
// //       setProducts(newProducts);

// //     };

// //     console.log("products", products)

// //     return (
// //       <ul>
// //         {products.map((product, index) => {
// //           return (
// //             <Product
// //               onVote={onVote}
// //               product={product}
// //               index={index}
// //             />
// //           );
// //         })}
// //         {/* Render an array of products, which should call onVote when + or - is clicked */}
// //       </ul>
// //     );
// //   };

// //   document.body.innerHTML = "<div id='root'></div>";
// //   const root = createRoot(document.getElementById("root"));
// //   root.render(
// //     <GroceryApp
// //       products={[
// //         { name: "Oranges", votes: 0 },
// //         { name: "Bananas", votes: 0 }
// //       ]}
// //     />
// //   );

// //   setTimeout(() => {
// //     let plusButton = document.querySelector("ul > li > button");
// //     if (plusButton) {
// //       plusButton.click();
// //     }
// //     setTimeout(() => {
// //       // console.log(document.getElementById("root").outerHTML);
// //     });
// //   });

// //   return (
// //     <div className="App">
// //       {/* <GroceryApp
// //         products={[
// //           { name: "Oranges", votes: 0 },
// //           { name: "Bananas", votes: 0 }
// //         ]}
// //       /> */}
// //     </div>
// //   );
// // }

// // class Username extends React.Component {
// //   state = { value: "" };

// //   changeValue(value) {
// //     this.setState({ value });
// //   }

// //   render() {
// //     const { value } = this.state;
// //     return <h1>{value}</h1>;
// //   }
// // }

// export function App() {
//   function clickHandler() {}

//   return (
//     <div>
//       <button onClick={clickHandler}>Change Username</button>
//       <input type="text" />
//       <Username />
//     </div>
//   );
// }
