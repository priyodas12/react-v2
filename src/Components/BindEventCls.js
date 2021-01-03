import React, { Component } from 'react'

export default class Bindeventcls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: "Up"
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  componentWillUnmount() {

  }

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() { }

  // Class Properties (Stage 3 Proposal)
  eventHandler = () => {
    this.setState(
      { status: "Down" }
    )
  }

  render() {
    return (
      <>
        <h1>{this.state.status}</h1>
        <button onClick={this.eventHandler}>change status</button>
      </>
    )
  }
}
