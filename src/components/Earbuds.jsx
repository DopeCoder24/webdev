import { useState } from "react";
// arrow function let/const functionName=(parameter)=>{}

const Earbuds = (props) => {
  let [cart, setaddcart] = useState(false);
  const carthandeler = () => {
    setaddcart(true);
  };
  return (
    <div className="earbuds">
      <p className="discount"> 60% off</p>
      <h1>{props.name}</h1>
      <h4 className="price">{props.price}</h4>
      <button>Buy Now</button>
      <button>Learn More</button>
      <img src={props.img} alt="" />
      {/* 
      {cart == false && (
        <button className="cartbtn" onClick={carthandeler}>
          Add to Cart
        </button>
      )}
      {cart == true && <button className="addedcart">Go to Cart</button>} */}
    </div>
  );
};
export default Earbuds;
