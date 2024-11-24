import "./App.css";

import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Productspage from "./pages/Productspage";

import Userpage from "./pages/Userpage";
import Phonepages from "./pages/Phonepages";
import Earbudspage from "./pages/Earbudspage";
import SmartTVpage from "./pages/SmartTVpage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Pokemonlist from "./pages/Pokemonlistpage";
// i have to fetch data from api
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <div className="left">
            <NavLink to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png"
                alt="logo"
              />
            </NavLink>
            <NavLink to="/phones">Phones</NavLink>
            <NavLink to="/earbuds">Smart Watch & Audio</NavLink>
            <NavLink to="/smarttv">TV & Smart home</NavLink>
          </div>
          <div className="right">
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faUser} />
            {/* <FontAwesomeIcon icon="fas fa-shopping-cart" /> */}
          </div>
        </div>
        <Switch>
          <Route path="/pokelist">
            <Pokemonlist />
          </Route>
          <Route path="/phones">
            <Phonepages />
          </Route>
          <Route path="/earbuds">
            <Earbudspage />
          </Route>
          <Route path="/smartTV">
            <SmartTVpage />
          </Route>
          <Route path="/userpage">
            <Userpage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
