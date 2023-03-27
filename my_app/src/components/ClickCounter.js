import React, { Component } from 'react'
import WithCounter from './WithCounter'

class CLICKCOUNTER extends Component {
  render() {
    const { count, handleIncrement } = this.props
    return (
      <div>
        <button onClick={handleIncrement}>clicked {count} times</button>
      </div>
    )
  }
}

export default WithCounter(CLICKCOUNTER)
