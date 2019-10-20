import React, { Component } from 'react'

interface Props {
  version: string,
  image: string,
  name: string,
  level: number
}

class AccountStats extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="div-account">
        <div className="img-summoner-icon">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/${this.props.version}/img/profileicon/${this.props.image}.png`}
            alt="summoner icon" 
          />
        </div>
        <div className="div-account-details">
          <span>
            {this.props.name}
          </span><br />
          Lv: {this.props.level}
        </div>
      </div>
    )
  }
}

export default AccountStats;
