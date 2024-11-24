import Phone from "../components/Phone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  phoneData,
  EarBudsdata,
  smarttvdata,
  homephData,
  offerData,
  exploreData,
} from "../data/data.js";
// import axios from "axios";

// import Tablet from "../components/Tablet";
import Earbuds from "../components/Earbuds";
import SmartTV from "../components/SmartTV";
import { Link } from "react-router-dom/";
import { NavLink } from "react-router-dom";
import { text } from "@fortawesome/fontawesome-svg-core";
import Homephone from "../components/Homephone.jsx";
import Offer from "../components/Offer.jsx";
import Explorepage from "../components/Explorepage.jsx";

const Homepage = (props) => {
  // here smarttvdata is an arrey collection of object

  return (
    <div className="homepage">
      {/* <h1>This is HOMEPAGE</h1> */}
      {/* <h1>welcome to my Website</h1> */}
      {/* <div className="navbar">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png"
            alt="logo"
          />
          <NavLink to="/phones">Phones</NavLink>
          <NavLink to="/earbuds">Smart Watch & Audio</NavLink>
          <NavLink to="/smarttv">TV & Smart home</NavLink>
        </div>
        <div className="right">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} />
          {/* <FontAwesomeIcon icon="fas fa-shopping-cart" /> */}
      {/* </div> */}
      {/* </div> */}
      <div className="homecontent">
        <h1>Featured Products</h1>
        <div className="white">
          <div className="ph">
            <img
              src="https://i03.appmifile.com/771_operator_in/04/11/2024/78b882d5215b24cb5d28b2f6259a3b0f.png?thumb=1&w=660&f=webp&q=85"
              alt=""
            />
            <div className="ph2">
              <h1>Xiaomi 14 CIVI</h1>
              <h3>Cinematic Vision</h3>
            </div>
          </div>

          <div className="homeph">
            {/*we are mapping homephData and giving to currentData function and rendering from homepage.jsx  */}
            {homephData.map((currentData) => (
              <Homephone
                img={currentData.img}
                name={currentData.name}
                text={currentData.price}
              />
            ))}
          </div>
        </div>
        <div className="exclusive">
          <h1>Exclusive Offers</h1>
          <div className="ex">
            {offerData.map((currentData) => (
              <Offer
                img={currentData.img}
                title={currentData.title}
                text={currentData.text}
              />
            ))}
          </div>
        </div>

        <h1>Explore Xiaomi</h1>
        <div className="explore">
          <div className="exp">
            {exploreData.map((currentData) => (
              <Explorepage img={currentData.img} text={currentData.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
