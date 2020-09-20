import React from "react";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Porfolio from "./Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Porfolio} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
