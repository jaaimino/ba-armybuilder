import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from 'routes/index';
import Test from 'routes/test';

const AppRouter = () => (
  <Router>
    <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/test" exact component={Test} />
    </Switch>
  </Router>
);

export default AppRouter;