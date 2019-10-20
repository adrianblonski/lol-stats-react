import React, { Component } from 'react';

import './graph.css';

interface Props {
  wins: number,
  loses: number
}

class WinRate extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  getStyle = () => {
    const {wins, loses} = this.props;
    if(wins + loses === 0) {
      return {
        width: '100%',
        backgroundColor: '#eaeaea'
      };
    } else {
      const wr = wins / (wins + loses) * 100;
      return {
        width: Math.round(wr)+'%',
        backgroundColor: '#1f8ecd'
      };
    }
  }

  render() {
    return (
      <div className="graph">
        <div className="graph-wins" style={this.getStyle()}></div>
      </div>
    )
  }
}

export default WinRate;
