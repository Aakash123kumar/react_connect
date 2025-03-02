import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HeaderComponent = () => {
  const [login, setLogin] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>
      <div className="nav-iteams">
        <ul>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>
          <button className="login-btn"
            onClick={() => {
              login == "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;