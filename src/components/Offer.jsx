const Offer = (props) => {
  return (
    <div className="offer">
      <img src={props.img} alt="" />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};
export default Offer;
