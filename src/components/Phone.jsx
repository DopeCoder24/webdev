const Phone = (props) => {
  return (
    <div className="phone">
      <img src={props.img} alt="" />
      <h5>{props.name}</h5>
      <p>{props.price}</p>
    </div>
  );
};
export default Phone;
