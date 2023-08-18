import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import CustomButton from "../custon-Button/custom-Button.component";
import CartItemComponent from "../cartItem/cartItem.component";

import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import { CartActionTypes, CartItem } from "../../redux/cart/types";
import { toggleCartHidden } from "../../redux/cart/actions";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/selectors";
import { Dispatch } from "redux";

interface Props extends RouteComponentProps {
  cartItems: Array<CartItem>;
  dispatch: Dispatch<CartActionTypes>;
}

const CartDropdown: React.FC<Props> = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItemComponent key={cartItem.item.id} cartItem={cartItem} />
        ))
      ) : (
        <span className="empty-message">your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
