import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'routes/Home';
import Factions from 'routes/Factions';
import Units from 'routes/Units';
import PageNotFound from 'routes/PageNotFound';
import Breadcrumbs from 'components/Breadcrumbs';
import MainNav from 'components/MainNav';
import s from 'styles/app.style';
import { DataContext, Data } from 'database';

export default function App() {
  return (
    <div style={s.root}>
      <DataContext.Provider value={Data}>
        <MainNav />
        <h1 style={s.title}>Single Page Apps for GitHub Pages</h1>
        <nav style={s.breadcrumbs}>
          <Breadcrumbs />
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/factions" component={Factions} />
          <Route exact path="/factions/:factionName" component={Units} />
          <Route component={PageNotFound} />
        </Switch>
      </DataContext.Provider>
    </div>
  );
}