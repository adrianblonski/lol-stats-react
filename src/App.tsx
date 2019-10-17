import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SiteNavbar from './components/navbar/main';
import HomePage from './pages/home';

class App extends Component {

  onSearch = (id: number, server: string) => {
    console.log(id + ", " + server);
  }

  render() {
    return (
      <Router>
        <SiteNavbar onSearch={this.onSearch} />
        <Route exact path="/" component={HomePage} />
      </Router>
    );
  }
}

export default App;
