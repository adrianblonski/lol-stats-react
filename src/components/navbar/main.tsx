import React, { Component } from 'react'
import ComboBox from './combobox';

import './style.css';

interface Props {
  onSearch: (server: string, name: string) => void
}

interface State {
  server: number,
  name: string
}

const serverNames = ["EUNE", "EUW", "NA", "LAS", "LAN", "OCE", "KR", "RU", "BR", "TR"];

class SiteNavbar extends Component<Props, State> {
  summonerRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      name: '',
      server: 0
    }

    this.summonerRef = React.createRef();
  }

  onServerChange = (id: number): void => {
    this.setState({
      server: id,
      name: this.state.name
    });
  }

  onSearchClick = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const inputValue = this.summonerRef.current.value;
    this.props.onSearch(serverNames[this.state.server], inputValue);
    this.setState({
      name: inputValue,
      server: this.state.server
    });
  }

  render() {
    return (
      <div className="navbar">
        <div className="logo-small">
          <h4>LS</h4>
        </div>
        <div className="logo">
          <h4>LoL Stats</h4>
        </div>
        <form onSubmit={this.onSearchClick} className="frm-search">
          <ComboBox options={serverNames} onChange={this.onServerChange} />
          <input type="text" ref={this.summonerRef} placeholder="Summoner Name..." />
          <input type="submit" value="GO" />
        </form>
      </div>
    )
  }
}

export default SiteNavbar
