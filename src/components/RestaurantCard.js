const RestaurantCard = ({ resData }) => {
  const { name, price, description } = resData;
  return (
    <div className="res-card">
      <h3>{name}</h3>
      <h4>Price: ₹{price}</h4>
      <h4>{description}</h4>
    </div>
  );
};

export default RestaurantCard;