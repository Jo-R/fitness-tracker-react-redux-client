import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AddRunActivity } from "./features/runActivities/AddRunActivity";
import { RunActivities } from "./features/runActivities/RunActivities";
import { ViewRunActivity } from "./features/runActivities/ViewRunActivity";

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
        <Route exact path="/activity/:runId" component={ViewRunActivity} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
