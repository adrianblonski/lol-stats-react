import React, { Component } from 'react';
import SiteNavbar from './components/navbar/main';

class App extends Component {

  onSearch = (id: number, server: string) => {
    console.log(id + ", " + server);
  }

  render() {
    return (
      <div>
        <SiteNavbar onSearch={this.onSearch} />
      </div>
    );
  }
}

export default App;
