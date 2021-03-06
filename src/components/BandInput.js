// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = e => {
    this.setState({ name: e.target.value })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" placeholder="Band Name" onChange={this.handleOnChange} value={this.state.name} />
        </form>
      </div>
    )
  }
}

export default BandInput;
