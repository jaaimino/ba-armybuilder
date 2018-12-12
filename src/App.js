import React, { Component } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppRouter from 'router';
import TemporaryDrawer from 'components/drawer.js';
import AppBar from 'components/app-bar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar
          onOpenSidebar={() => {
            this.setState({drawerOpen: true})
          }}
        />
        <TemporaryDrawer
          open={this.state.drawerOpen}
          onClose={() => {
            this.setState({drawerOpen: false})
          }}
        />
        <AppRouter />
      </React.Fragment>
    );
  }
}

export default App;
