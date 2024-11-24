import Phone from "../components/Phone";
import { phoneData } from "../data/data";
const Phonepages = () => {
  return (
    <div className="container">
      {phoneData.map((currentphone) => (
        <Phone
          discount={currentphone.discount}
          img={currentphone.img}
          name={currentphone.name}
          price={currentphone.price}
        />
      ))}
    </div>
  );
};
export default Phonepages;
