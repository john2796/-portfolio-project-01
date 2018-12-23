import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewTesting extends Component {
  static propTypes = {
  }

  state = {
    isClick: false
  }

  handleClick = () => {
    this.setState((state, props) => { return { isClick: !state.isClick } })


  }


  render() {
    let color = null;
    if (this.state.isClick) {
      color = "red"
    }
    return (
      <div>
        <h1
          style={{ color }}
        >Change to green</h1>
        <button
          onClick={this.handleClick}
        >Click</button>
      </div>
    )
  }
}

export default NewTesting

