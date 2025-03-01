import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utiles/restaurantData";

const BodyComponent = () => (
    <div className="res-container">
      {restaurantData.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}
    </div>
  );

  export default BodyComponent;