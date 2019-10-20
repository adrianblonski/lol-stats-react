import React, { Component } from 'react';

import league from '../../interfaces/league';

import Winrate from './winrate';

interface Props {
  queue: string,
  stats: league
}

class RankedStats extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    const {league, division, wins, loses, lp} = this.props.stats;
    const wr = Math.round(wins / (wins + loses) * 100);
    const wrText = wins + 'W / ' + loses + 'L' + (wr ? ' / ' + wr + '%' : '');

    const rank = league + (division === 0 ? '' : ' ' + division + ' / ' + lp + ' LP');
    const imgRank = division === 0 ? 'default' : league.toLowerCase() + '_' + division;

    return (
      <div className="div-box-info">
        <span>{this.props.queue} Queue</span><br />
        <div className="rank-info-content">
          <div className="img-league">
            <img
              src={`http://opgg-static.akamaized.net/images/medals/${imgRank}.png`}
              alt="summoner icon" 
            />
            <p>{rank.charAt(0).toUpperCase() + rank.slice(1)}</p>
          </div>
          <div className="div-winrate">
            <Winrate wins={wins} loses={loses}/>
            <p>{wrText}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RankedStats;
