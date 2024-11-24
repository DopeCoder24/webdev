import SmartTV from "../components/SmartTV";
import { smarttvdata } from "../data/data";

const SmartTVpage = () => {
  return (
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
  );
};
export default SmartTVpage;
