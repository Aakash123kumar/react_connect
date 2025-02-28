import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import the CSS file

/**
 *  Header
 *    Logo
 *    Nav Items
 * Body
 *    Search
 *    RestaurantContainer
 *    RestaurantCard
 * Footer
 *    Copyright
 *    Link
 *    Address
 *    Contact
 */

// Header Component
const HeaderComponent = () => (
  <div className="header">
    <div className="logo-container">
      <img
        src="https://cdn6.f-cdn.com/contestentries/1318421/28372416/5aedd3a7adb01_thumb900.jpg"
        alt="Logo"
        className="logo"
      />
    </div>
    <div className="nav-iteams">
      <ul>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);

// Restaurant Data
const restaurantData = [
  {
    id: 1,
    name: "Tofu Bao",
    price: "250",
    description: "crispy, fried tofu bites mixed in a spicy, topped Sausage",
  },
  {
    id: 2,
    name: "Tacos De alambre",
    price: "300",
    description: "chicken cooked with bacon, topped with Oaxaca cheese",
  },
  {
    id: 3,
    name: "Tacos Al Pastor",
    price: "200",
    description: "warmth from spices and sweetness from pineapple",
  },
  {
    id: 4,
    name: "Chicken Bruschetta",
    price: "500",
    description: "crunch, succulent juicy chicken and a glaze drizzle",
  },
  {
    id: 5,
    name: "Vegetarian Frito Pie",
    price: "350",
    description: "Kick off the week than with this Vegetarian Frito Pie",
  },
  {
    id: 6,
    name: "Kafta Kebabs",
    price: "200",
    description: "beautifully flavored with spices and fresh parsley",
  },
  {
    id: 7,
    name: "Balik Ekmek",
    price: "600",
    description: "BALIK EKMEK / ISTANBUL STREET FLAVOR, FISH SANDWICH",
  },
  {
    id: 8,
    name: "Kielbasa Quesadillas",
    price: "500",
    description:
      "Sausage, peppers, and onions with a twist: Kielbasa Quesadillas",
  },
  {
    id: 9,
    name: "Ground Tacos",
    price: "400",
    description:
      "Sandwiches have eggs, bacon, cheese, avocado, spinach, and tomato",
  },
];

// Restaurant Card Component
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

// Body Component
const BodyComponent = () => (
  <div className="res-container">
    {restaurantData.map((restaurant) => (
      <RestaurantCard key={restaurant.id} resData={restaurant} />
    ))}
  </div>
);

// Footer Component
const FooterComponent = () => (
  <div className="footer-container">
    <div className="footer-iteams">
      <ul>
        <li>Contact Us</li>
        <li>Address: 123 Food Street, Suite 456, Tasty City, Yumland, 98765</li>
      </ul>
    </div>
  </div>
);

// App Layout
const AppLayout = () => (
  <div className="app-layout">
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </div>
);

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);