const Homephone = (props) => {
  return (
    <div className="homephone">
      <img src={props.img} alt="" />
      <h2>{props.name}</h2>
      <p>{props.price}</p>
    </div>
  );
};
export default Homephone;
