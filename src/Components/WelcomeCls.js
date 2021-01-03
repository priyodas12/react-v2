import React, { Component } from 'react';
//Example of Destructuring in Class Component

class WelcomeCls extends Component {
  render() {
    const { name, surname } = this.props;
    return (
      <div>
        <h1>Class Component</h1>
        <h1>Hi "{name},{surname}"</h1>
      </div>
    );
  }
}

export default WelcomeCls;