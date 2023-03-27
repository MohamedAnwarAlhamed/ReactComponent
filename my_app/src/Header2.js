import React, { Component } from 'react'

class HEADER2 extends Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
    console.log("constructor 2");
  }

  shouldComponentUpdate() {
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps 2");
    return {favoritecolor: props.favcol };
  }

  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}


export default HEADER2