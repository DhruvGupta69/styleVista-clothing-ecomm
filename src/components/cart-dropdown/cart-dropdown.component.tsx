import React from "react";

import CustomButton from "../custon-Button/custom-Button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
