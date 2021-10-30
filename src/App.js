import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Preview, Form, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/preview" component={Preview} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
