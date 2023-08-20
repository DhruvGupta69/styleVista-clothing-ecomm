import React from "react";
import "./checkout.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selecCartTotal } from "../../redux/cart/selectors";
import { CartItem } from "../../redux/cart/types";

import CheckoutItem from "../checkout-Item/checkout-Item.component";

interface Props {
  cartItems: Array<CartItem>;
  total: number;
}

const CheckOutPage: React.FC<Props> = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Discription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.item.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total:${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selecCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
