import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css"; 
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";



const AppLayout = () => (
  <div className="app-layout">
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);