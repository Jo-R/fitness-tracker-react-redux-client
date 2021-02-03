import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AddRunActivity } from "./features/runActivities/AddRunActivity";
import { RunActivities } from "./features/runActivities/RunActivities";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <>
            <RunActivities />
            <AddRunActivity />
          </>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
