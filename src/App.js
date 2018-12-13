import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Example from 'routes/Example';
import PageNotFound from 'routes/PageNotFound';
import Breadcrumbs from 'components/Breadcrumbs';
import MainNav from 'components/MainNav';
import s from 'styles/app.style';
import loki from 'lokijs';
import units from 'data/units';
import rules from 'data/rules';

const db = new loki('sandbox.db');
export const LokiContext = React.createContext();

// Make our collections
const collections = {};
collections.units = db.addCollection('units');
collections.rules = db.addCollection('rules');

// Populate with JSON seeds
collections.units.insert(units);
collections.rules.insert(rules);

export default function App() {
  return (
    <div style={s.root}>
      <LokiContext.Provider value={collections}>
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
      </LokiContext.Provider>
    </div>
  );
}