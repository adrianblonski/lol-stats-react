import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import league from '../interfaces/league';

import '../components/stats/style.css';

import AccountStats from '../components/stats/account';
import RankedStats from '../components/stats/ranked';

interface RouteInfo {
  server: string,
  name: string
}

interface Props extends RouteComponentProps<RouteInfo> {
  server: string,
  name: string
}

interface State {
  version: string,
  name: string,
  level: number,
  image: string,
  soloq: league,
  flexq: league
}

class Stats extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      version: '9.20.1',
      name: 'KLAPKI W LESIE',
      level: 0,
      image: '1112',
      soloq: {
        league: 'gold',
        division: 2,
        lp: 15,
        wins: 10,
        loses: 3
      },
      flexq: {
        league: 'diamond',
        division: 1,
        lp: 22,
        wins: 44,
        loses: 12
      }
    };
  }

  render() {
    return (
      <div className="stats-container">
        <AccountStats 
          version={this.state.version} 
          level={this.state.level}
          image={this.state.image} 
          name={this.state.name} 
        />
        <div className="div-ranked">
          <RankedStats queue="Solo" stats={this.state.soloq} />
          <RankedStats queue="Flex 5:5" stats={this.state.flexq} />
        </div>
      </div>
    )
  }
}

export default Stats
