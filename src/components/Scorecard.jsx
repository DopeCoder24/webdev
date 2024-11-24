import { useState } from "react";

const Scorecard = (props) => {
  // let [value,setvalueFunction]=useState(initial value)=>USE STATE
  let [run, Setrun] = useState(0);
  const increaserun = (changeby) => {
    Setrun(run + changeby);
    setball(++ball);
  };
  let [ball, setball] = useState(0);

  let [isout, setisout] = useState(false);
  const outhandler = () => {
    setisout(true);
  };
  const Reset = () => {
    Setrun(0);
    setball(0);
    setisout(false);
  };
  return (
    <div className="scorecard">
      <h1>Cricket Score</h1>
      <h4>Run : {run}</h4>
      <h4>Ball : {ball}</h4>
      {isout == true && (
        <div className="hi">
          <p>OUT</p> <button onClick={Reset}>Reset</button>
        </div>
      )}
      {/* when we will use parameter  */}
      <button
        onClick={() => {
          increaserun(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          increaserun(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          increaserun(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          increaserun(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          increaserun(6);
        }}
      >
        6
      </button>
      <button className="out" onClick={outhandler}>
        Out
      </button>
    </div>
  );
};
export default Scorecard;
