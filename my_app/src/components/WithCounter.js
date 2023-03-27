import React from 'react'
import { Component } from 'react'

const WithCounter = (OriginalComponent) => {
  return class WithCounter extends Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0,
      }
    }
    handleIncrement = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 }
      })
    }
    render() {
      return <OriginalComponent count={this.state.count}  handleIncrement={this.handleIncrement}/>
    }
  }
}

export default WithCounter
