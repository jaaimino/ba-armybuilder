import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import ExampleComponent from 'components/ExampleComponent';
import PageNotFound from 'components/PageNotFound';
import Breadcrumbs from 'components/Breadcrumbs';
import s from 'styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>Single Page Apps for GitHub Pages</h1>
      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}