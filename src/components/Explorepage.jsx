const Explorepage = (props) => {
  return (
    <div className="explorepage">
      <img src={props.img} alt="" />
      <h3>{props.text}</h3>
    </div>
  );
};
export default Explorepage;
