import React from "react";
import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/singInPage/signIn&signUp.component";
import firebase, { auth } from "./firebase/firebase.utils";
import "./App.css";

interface Props {}

interface State {
  currentUser: firebase.User | null;
}

class App extends React.Component<Props, State> {
  private unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
