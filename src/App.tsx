import React from "react";
import HomePage from "./pages/homePage/homepage.component";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const HatsPage: React.FC = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
