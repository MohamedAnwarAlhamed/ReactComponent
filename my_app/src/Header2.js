import React, { Component } from 'react'

class HEADER2 extends Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
    console.log("constructor 2");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps 2");
    return {favoritecolor: props.favcol };
  }

  componentDidMount() {
    console.log("componentDidMount 2");
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


export default HEADER2