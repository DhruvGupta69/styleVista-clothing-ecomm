import React from "react";

import "./cart-Icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/122 shopping-bag.svg";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/actions";
import { CartActionTypes } from "../../redux/cart/types";
import { Dispatch } from "redux";
import { RootState } from "../../redux/root-reducer";
import { selectCartItemsCount } from "../../redux/cart/selectors";

interface Props {
  toggleCartHidden: () => CartActionTypes;
  itemCount?: number;
}

const CartIcon: React.FC<Props> = ({ toggleCartHidden, itemCount = 0 }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state: RootState) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
