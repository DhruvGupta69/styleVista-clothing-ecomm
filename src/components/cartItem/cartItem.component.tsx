import React from "react";
import "./cartItem.styles.scss";
import { CartItem as CartItemEntity } from "../../redux/cart/types";

interface Props {
  cartItem: CartItemEntity;
}

const CartItemComponent: React.FC<Props> = ({
  cartItem: { item, quantity },
}) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          {quantity}x{item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItemComponent;
