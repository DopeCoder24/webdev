import Earbuds from "../components/Earbuds";
import { EarBudsdata } from "../data/data";
const Earbudspage = () => {
  return (
    <div className="container">
      {EarBudsdata.map((currentearbuds) => (
        <Earbuds
          img={currentearbuds.img}
          name={currentearbuds.name}
          price={currentearbuds.price}
        />
      ))}
    </div>
  );
};
export default Earbudspage;
