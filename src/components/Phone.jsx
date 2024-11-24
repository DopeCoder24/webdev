// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import { faHome, faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
import { phoneData } from "../data/data";
const Phone = (props) => {
  let [cart, setaddcart] = useState(false);
  const carthandeler = () => {
    setaddcart(true);
  };
  return (
    <div className="phone">
      <p className="discount">{props.discount}</p>
      <h1> {props.name}</h1>
      <h4>{props.price}</h4>
      <button>Buy Now</button>
      <button>Learn More</button>
      <img src={props.img} alt="" />
      {/* {cart == false && (
        <button onClick={carthandeler} className="cartbtn">
          Add to Cart
        </button>
      )}
      {cart == true && <button className="addedcart">Go to Cart</button>} */}
    </div>
  );
};
export default Phone;
