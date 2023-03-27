import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HOVERCOUNTER extends Component {
    render() {
    const { count, handleIncrement } = this.props                                      
    return (
      <div>
        <button onMouseOver={handleIncrement}>Hovered {count} times</button>
      </div>
    )
  }
}


export default WithCounter(HOVERCOUNTER); 