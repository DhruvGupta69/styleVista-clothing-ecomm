import React from "react";
import HomePage from "./pages/homePage/homepage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import { Switch, Route } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import SignInAndSignUp from "./pages/singInPage/signIn&signUp.component";
import "./App.css";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
