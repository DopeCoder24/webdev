import img from "../assets/SEcover.webp";
const Tablet = (props) => {
  return (
    <div className="tabBox">
      <h1>Redmi Pad SE Cover</h1>
      <button>Learn More</button>
      <img src={img} alt="" />
      <p className="discount">44% off</p>
    </div>
  );
};
export default Tablet;
