const SmartTV = (props) => {
  return (
    <div className="smarttv">
      <p>{props.discount}</p>
      <h1>{props.name}</h1>
      <h4>{props.price}</h4>
      <button>Buy Now</button>
      <button>Learn More</button>
      <img src={props.img} alt="" />
    </div>
  );
};
export default SmartTV;
