import Card from "../components/Card";
import UserCard from "../components/UserCard";
import Redmi13Pro from "../assets/redmiNote13pro.webp";
import Redmi5G from "../assets/redmi5G.webp";
import Xiaomi14Ultra from "../assets/Xiaomi14.webp";
import Xiaomi14 from "../assets/xiaomi.webp";
import Phone from "../components/Phone";
import axios from "axios";
import RedmiPadSE from "../assets/SEcover.webp";
import xiaomipadcover from "../assets/Xiaomipadcover.webp";
import flipcase from "../assets/flipcase.webp";
import Tablet from "../components/Tablet";
import Earbuds from "../components/Earbuds";
import SmartTV from "../components/SmartTV";
const Homepage = (props) => {
  const phoneData = [
    {
      img: Redmi13Pro,
      name: "Redmi Note 13 Pro  5G",
      price: "22,999",
    },
    { img: Redmi5G, name: "Redmi Note 13 5G", price: "15,999" },
    { img: Xiaomi14Ultra, name: "Xiaomi 14 Ultra", price: "99,999" },
    { img: Xiaomi14, name: "Xiaomi 14", price: "59,999" },
    { img: Redmi13Pro, name: "Redmi Note 13 Pro  5G", price: "22,999" },
    { img: Redmi5G, name: "Redmi Note 13 5G", price: "15,999" },
    { img: Xiaomi14Ultra, name: "Xiaomi 14 Ultra", price: "99,999" },
    { img: Xiaomi14, name: "Xiaomi 14", price: "59,999" },
  ];
  const Tabletdata = [
    { img: RedmiPadSE, name: "Redmi Pad SE Cover" },
    { img: xiaomipadcover, name: "Xiaomi Pad 6 cover" },
    { img: flipcase, name: "Flip Case for Redmi Pad" },
  ];
  const EarBudsdata = [
    {
      img: "https://i03.appmifile.com/626_item_in/18/07/2024/972df521d15b577474d3990fba0acf14.jpg?thumb=1&w=300&f=webp&q=85",
      name: "Redmi Buds 5C",
      price: "1,999",
    },
    {
      img: "https://i03.appmifile.com/352_item_in/22/04/2024/10c158bab5315d96a721ec2e98c44abd.jpg?thumb=1&w=300&f=webp&q=85",
      name: "Redmi Buds 5A",
      price: "1,499",
    },
    {
      img: "https://i03.appmifile.com/748_item_in/12/02/2024/b3b0f83bac220c0ec40a101fd3743e02.jpg?thumb=1&w=300&f=webp&q=85",
      name: "Redmi Buds 5",
      price: "2,999",
    },
  ];
  // here smarttvdata is an arrey collection of object
  const smarttvdata = [
    {
      discount: "42% off",
      name: "Xiaomi Smart TV A Pro 4K 43 (1.08m)",
      price: "24,999 INR",
      img: "https://i03.appmifile.com/209_item_in/20/09/2024/37664d8037bff9363179d5d07f68b2ec.jpg?thumb=1&w=300&f=webp&q=85",
    },
    {
      discount: "32% off",
      name: "Xiaomi smart TV X  Series 2024 Edition",
      price: "33,999 INR",
      img: "https://i03.appmifile.com/287_item_in/04/09/2024/a3ec2c6f0833854a8ee1ee16855eb40e.png?thumb=1&w=300&f=webp&q=85",
    },
    {
      discount: "69% off",
      name: "Xiaomi X Pro QLED  Series",
      price: "69,999 INR",
      img: "https://i03.appmifile.com/936_item_in/05/09/2024/75288be41a3cedb3c1a3a96763da3823.png?thumb=1&w=300&f=webp&q=85",
    },
    {
      discount: "32% off",
      name: "Xiaomi smart TV X  Series 2024 Edition",
      price: "28,999 INR",
      img: "https://i03.appmifile.com/972_item_in/04/09/2024/06a3c151cefa8770a806f60432d9c573.png?thumb=1&w=300&f=webp&q=85",
    },
  ];
  return (
    <div className="homepage">
      <h1>This is HOMEPAGE</h1>
      <h1>welcome to my Website</h1>
      <div className="container">
        {phoneData.map((currentphone) => (
          <Phone
            img={currentphone.img}
            name={currentphone.name}
            price={currentphone.price}
          />
        ))}
      </div>
      <div className="container">
        {Tabletdata.map((currenttablet) => (
          <Tablet img={currenttablet.img} name={currenttablet.name} />
        ))}
      </div>
      <div className="container">
        {EarBudsdata.map((currentearbuds) => (
          <Earbuds
            img={currentearbuds.img}
            name={currentearbuds.name}
            price={currentearbuds.price}
          />
        ))}
      </div>
      <div className="container">
        {smarttvdata.map((currentsmarttvs) => (
          <SmartTV
            discount={currentsmarttvs.discount}
            name={currentsmarttvs.name}
            price={currentsmarttvs.price}
            img={currentsmarttvs.img}
          />
        ))}
      </div>
    </div>
  );
};
export default Homepage;
