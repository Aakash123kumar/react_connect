import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/restaurantData"; 

const BodyComponent = () => {
  const [resData, setResData] = useState(restaurantData);
  const [searchText, setSearchText] = useState("");

  const filterHandler = () => {
    const filtered = restaurantData.filter((res) => res.price < 300);
    setResData(filtered);
  };

  const searchHandler = () => {
    const filtered = restaurantData.filter((data) =>
      data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setResData(filtered);
  };

  return (
    <div className="res-container">
      <div className="filter-container">
        <div className="search-input-container">
          <input
            className="search-text-field"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
          />
        </div>
        <div className="search-button-container">
          <button className="btn-search-text" onClick={searchHandler}>
            Search
          </button>
        </div>
        <div className="filter-button-container">
          <button className="filer-btn" onClick={filterHandler}>
            Filter Restaurants
          </button>
        </div>
      </div>
      {resData.length > 0 ? (
        resData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))
      ) : (
        <p>No restaurants found.</p>
      )}
    </div>
  );
};

export default BodyComponent;