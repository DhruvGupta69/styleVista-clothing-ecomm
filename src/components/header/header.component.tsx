import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/084 crown.svg";
import "./header.styles.scss";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
