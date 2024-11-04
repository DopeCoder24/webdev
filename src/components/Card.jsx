const Card = (props) => {
  console.log(props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
