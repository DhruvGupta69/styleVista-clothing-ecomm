import React from "react";

import "./cart-Icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/122 shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/actions";
import { CartActionTypes } from "../../redux/cart/types";
import { Dispatch } from "redux";

interface Props {
  toggleCartHidden: () => CartActionTypes;
}

const CartIcon: React.FC<Props> = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
