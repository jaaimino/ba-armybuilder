import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Example from 'routes/Example';
import PageNotFound from 'routes/PageNotFound';
import Breadcrumbs from 'components/Breadcrumbs';
import MainNav from 'components/MainNav';
import s from 'styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <MainNav />
      <h1 style={s.title}>Single Page Apps for GitHub Pages</h1>
      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={Example} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}