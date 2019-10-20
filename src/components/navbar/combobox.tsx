import React, { Component } from 'react'

interface Props {
  options: string[],
  selected?: number,
  onChange: (id: number) => void
}

interface State {
  selected: number
}

export default class ComboBox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selected: this.props.selected | 0
    }
  }

  handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const selId = parseInt(event.currentTarget.value);
    this.setState({
      selected: selId
    });
    this.props.onChange(selId);
  }

  render() {
    const { selected, options } = this.props;

    return (
      <select className="sel-region" onChange={this.handleChange} defaultValue={selected}>
        {options.map((option, index) => (
          <option key={index} value={index}>{option.toUpperCase()}</option>
        ))}
      </select>
    )
  }
}
