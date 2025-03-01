import { LOGO_URL } from "../utiles/constants";

const HeaderComponent = () => (
    <div className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
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

  export default HeaderComponent;