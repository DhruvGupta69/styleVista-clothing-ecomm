import React from "react";
import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/signIn&signUpPage/signIn&signUp.component";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import firebase, {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/actions";
import { UserActionTypes } from "./redux/user/types";
import { User } from "./redux/user/data";

interface Props {
  setCurrentUser: (u: User | null) => UserActionTypes;
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
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  setCurrentUser: (user: User | null) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
