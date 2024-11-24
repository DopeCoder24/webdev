import { useState } from "react";

const Scorecard2 = (props) => {
  let [run, setrun] = useState(0);
  const runincrease = (increaseby) => {
    setrun(run + increaseby);
    setball(++ball);
  };
  let [ball, setball] = useState(0);
  let [out, setout] = useState(false);

  const Reset = () => {
    setrun(0);
    setball(0);
    setout(false);
  };

  return (
    <div className="scorecard2">
      <h1>Cricket Score card 2</h1>
      <h4>Run : {run}</h4>
      <h4>Ball : {ball}</h4>
      {out == true && (
        <div>
          <p>OUT</p>
          <button onClick={Reset}>Reset</button>
        </div>
      )}

      <button
        onClick={() => {
          runincrease(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          runincrease(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          runincrease(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          runincrease(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          runincrease(6);
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          setout(true);
        }}
      >
        OUT
      </button>
    </div>
  );
};
export default Scorecard2;
