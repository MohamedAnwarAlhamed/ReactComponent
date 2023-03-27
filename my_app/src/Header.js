import React, { Component } from 'react'

class HEADER extends Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
    console.log("constructor 1");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps 1");
    return {favoritecolor: props.favcol };
  }

  componentDidMount() {
    console.log("componentDidMount 1");
    setTimeout(() => {
      this.setState({favoritecolor: "blue"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}


export default HEADER