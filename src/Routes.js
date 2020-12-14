import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import DogList from "./DogList";
import GetDogs from "./GetDogs";
// import Dog from "./Dog"
import List from "./List"

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <List dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <GetDogs dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
