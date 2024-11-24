import { useEffect, useState } from "react";
import axios from "axios";
const Userpage = () => {
  let [tododata, settododata] = useState({
    userId: 1,
    id: 1,
    title: "Todo list",
    completed: false,
  });
  let [todoid, settodoid] = useState(1);
  const getdata = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${todoid}`)
      // .then((response) => response.json())
      .then((json) => {
        console.log(json);
        settododata(json.data);
      });
  };
  //   useEffect(arg1=function,arg2=dependency array(dependent on the function))
  // at first the function will defenetly work then when id will be updated the function will call
  useEffect(getdata, [todoid]);

  return (
    <div>
      <h1>Todo List</h1>
      <p>userId:{tododata.userId}</p>
      <p>id:{tododata.id}</p>
      <p>{tododata.title}</p>
      <p>{tododata.completed ? "completed" : "not completed"}</p>
      <button onClick={() => settodoid(--todoid)}>Previous Todo</button>
      <p>Current todoid {todoid}</p>
      <button onClick={() => settodoid(++todoid)}>Next Todo</button>
    </div>
  );
};
export default Userpage;
