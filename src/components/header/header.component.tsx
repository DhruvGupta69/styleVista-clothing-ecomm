import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/084 crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";
import { User } from "../../redux/user/types";
import { connect } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import CartIcon from "../cart-Icon/cart-Icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

interface Props {
  currentUser: User | null;
  cartHidden: boolean;
}

const Header: React.FC<Props> = ({ currentUser, cartHidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {cartHidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
