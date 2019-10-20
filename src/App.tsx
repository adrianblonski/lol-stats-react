import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SiteNavbar from './components/navbar/main';
import HomePage from './pages/home';
import Stats from './pages/stats';

class App extends Component {

  onSearch = (server: string, name: string) => {
    window.location.href = `/stats/${server}/${name}`;
  }

  render() {
    return (
      <Router>
        <SiteNavbar onSearch={this.onSearch} />
        <Switch>
          <Route exact path="/stats/:server/:name" component={Stats} />
          <Route component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
