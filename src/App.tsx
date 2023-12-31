import React from "react";

import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/signIn&signUpPage/signIn&signUp.component";
import CheckOutPage from "./components/checkout/checkout.component";

import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import firebase, {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/actions";
import { UserActionTypes } from "./redux/user/types";
import { User } from "./redux/user/types";

import { selectCurrentUser } from "./redux/user/selector";
import { createStructuredSelector } from "reselect";

interface Props {
  setCurrentUser: (u: User | null) => UserActionTypes;
  currentUser?: User | null;
}

interface State {}

class App extends React.Component<Props, State> {
  private unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef?.onSnapshot((snapShot) => {
          const data = snapShot.data() as User;

          this.props.setCurrentUser({
            id: snapShot.id,
            displayName: data.displayName,
            email: data.email,
            createdAt: data.createdAt,
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  setCurrentUser: (user: User | null) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
