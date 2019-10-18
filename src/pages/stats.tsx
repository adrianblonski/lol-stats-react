import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteInfo {
  server: string,
  name: string
}

interface Props extends RouteComponentProps<RouteInfo> {
  server: string,
  name: string
}

interface State {
  name: string
}

class Stats extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      name: ''
    }

  }

  render() {
    return (
      <div>
        <p>User: {this.props.match.params.name}, Server: {this.props.match.params.server}</p>
      </div>
    )
  }
}

export default Stats
