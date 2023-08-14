import React from "react";
import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/signIn&signUpPage/signIn&signUp.component";
import firebase, {
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";
import "./App.css";
import User from "./components/entities/User";

interface Props {}

interface State {
  currentUser: User | null;
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapshot) => {
          const data = snapshot.data() as User;
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                displayName: data.displayName,
                email: data.email,
                createdAt: data.createdAt,
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
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
