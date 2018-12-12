import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from 'routes/index';
import Test from 'routes/test';

const AppRouter = () => (
  <Router>
    <Switch>
        <Route path="/ba-armybuilder" exact component={Index} />
        <Route path="/ba-armybuilder/test" exact component={Test} />
    </Switch>
  </Router>
);

export default AppRouter;