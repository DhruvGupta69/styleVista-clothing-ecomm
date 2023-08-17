import React from "react";
import "./cart-Icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/122 shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
