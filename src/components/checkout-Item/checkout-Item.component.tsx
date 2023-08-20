import React from "react";
import "./checkout-Item.styles.scss";

import { CartActionTypes, CartItem, Item } from "../../redux/cart/types";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/actions";

import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {
  cartItem: CartItem;
  clearItem: (i: Item) => CartActionTypes;
  addItem: (i: Item) => CartActionTypes;
  removeItem: (i: Item) => CartActionTypes;
}

const CheckoutItem: React.FC<Props> = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.item.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem.item)}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem.item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${cartItem.item.price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem.item)}>
        {" "}
        &#10006;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  clearItem: (item: Item) => dispatch(clearItemFromCart(item)),
  addItem: (item: Item) => dispatch(addItem(item)),
  removeItem: (item: Item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
