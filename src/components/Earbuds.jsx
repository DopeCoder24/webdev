const Earbuds = (props) => {
  return (
    <div className="earbuds">
      <p className="discount"></p>
      <h1>{props.name}</h1>
      <p className="price">{props.price}</p>
      <button>Buy Now</button>
      <button>Learn More</button>
      <img src={props.img} alt="" />
    </div>
  );
};
export default Earbuds;
