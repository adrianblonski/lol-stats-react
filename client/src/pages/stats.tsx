import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import summoner from '../interfaces/summoner';

import '../components/stats/style.css';

import AccountStats from '../components/stats/account';
import RankedStats from '../components/stats/ranked';
import NotFound from './notfound';

interface RouteInfo {
  server: string,
  name: string
}

interface Props extends RouteComponentProps<RouteInfo> {
  server: string,
  name: string
}

class Stats extends Component<Props, summoner> {
  constructor(props: Props) {
    super(props);

    this.state = {
      version: '9.20.1',
      name: '',
      level: 0,
      image: '1',
      soloq: {
        league: '',
        division: 0,
        lp: 0,
        wins: 0,
        loses: 0
      },
      flexq: {
        league: '',
        division: 0,
        lp: 0,
        wins: 0,
        loses: 0
      }
    };
  }

  getResponse = async() => {
    const response = await fetch(`/api/${this.props.match.params.server}/${this.props.match.params.name}`);
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);

    return body;
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        if(res.err){
          const temp = JSON.parse(JSON.stringify(this.state));
          temp.level = -1;
          this.setState(temp);
        } else this.setState(res);
      })
  }

  render() {
    if(this.state.level === -1)
      return (<NotFound />);
    else return (
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
