import React, { Component } from 'react'
import Ezreal from '../img/ezreal.png';

class NotFound extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="img-background">
          <h2>Summoner was not found!</h2>
          <img src={Ezreal} alt="Ezreal :D" />
        </div>
      </div>
    )
  }
}

export default NotFound
