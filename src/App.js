import logo from "./logo.svg";
import "./App.css";

import Homepage from "./pages/Homepage";
// import Productspage from "./pages/Productspage";
// import Scorecard from "./components/Scorecard";
// import { Switch, Route } from "react-router-dom";
// i have to fetch data from api
function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <Productspage /> */}
    </div>

    // <div className="appcontainer">
    //   {/* <h1>My React App</h1> */}
    //   {/* <Productspage /> */}
    //   {/* <Scorecard /> */}
    // </div>
  );
}

export default App;
