import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";

const Navigation = () => {
  console.log("====================================");
  console.log(process.env.REACT_APP_API_URI);
  console.log("====================================");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/list">
          <CategoryPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
