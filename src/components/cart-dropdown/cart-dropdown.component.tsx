import React from "react";
import CustomButton from "../custon-Button/custom-Button.component";
import CartItemComponent from "../cartItem/cartItem.component";

import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import { CartItem } from "../../redux/cart/types";
import { RootState } from "../../redux/root-reducer";
import { selectCartItems } from "../../redux/cart/selectors";

interface Props {
  cartItems: Array<CartItem>;
}

const CartDropdown: React.FC<Props> = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItemComponent key={cartItem.item.id} cartItem={cartItem} />
      ))}
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
