import { useState } from "react";

const SmartTV = (props) => {
  let [cart, setaddcart] = useState(false);
  const carthandeler = () => {
    setaddcart(true);
  };
  return (
    <div className="smarttv">
      <p className="discount">{props.discount}</p>
      <h1>{props.name}</h1>
      <h4>{props.price}</h4>
      <button>Buy Now</button>
      <button>Learn More</button>
      <img src={props.img} alt="" />
      {/* {cart == false && (
        <button className="cartbtn" onClick={carthandeler}>
          Add to Cart
        </button>
      )}
      {cart == true && <button className="addedcart">Go to Cart</button>} */}
    </div>
  );
};
export default SmartTV;
