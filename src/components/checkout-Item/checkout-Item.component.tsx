import React from "react";
import "./checkout-Item.styles.scss";
import { Item } from "../../redux/cart/types";
import { CartItem, CartActionTypes } from "../../redux/cart/types";
import { isTemplateExpression } from "typescript";

interface Props {
  cartItem: CartItem;
}

const CheckoutItem: React.FC<Props> = ({ cartItem }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.item.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.item.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">${cartItem.item.price}</span>
      <div className="remove-button">&#10006;</div>
    </div>
  );
};

export default CheckoutItem;
