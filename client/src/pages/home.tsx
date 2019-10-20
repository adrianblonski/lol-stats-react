import React, { Component } from 'react'
import Teemo from '../img/teemo.png';

class HomePage extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="img-background">
          <img src={Teemo} alt="Teemo :D" />
        </div>
      </div>
    )
  }
}

export default HomePage
