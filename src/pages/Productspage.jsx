import { useState } from "react";
import "./Productpage.css";
import Scorecard from "../components/Scorecard";
const Productspage = (props) => {
  // show count = 0 at start , add a button to increase the value and a button to decrease the value
  let [count, setCount] = useState(0);
  const Increase = () => {
    setCount(++count);
  };
  const Decrease = () => {
    setCount(--count);
  };
  return (
    <div className="Productspage">
      <h1>PRODUCTS PAGE</h1>
      {count}
      <button onClick={Increase}>Increase</button>

      <button onClick={Decrease}>Decrease</button>
      {count < 0 && <h1>Number is negative</h1>}
    </div>
    // <div></div>
  );
};
export default Productspage;
