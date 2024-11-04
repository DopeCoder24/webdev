const UserCard = (props) => {
  return (
    <div className="UserCard">
      <h1>{props.first_name}</h1>
      <p>{props.email}</p>
    </div>
  );
};
export default UserCard;
