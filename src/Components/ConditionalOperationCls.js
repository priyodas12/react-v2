import React, { Component } from 'react'

export class ConditionalOperationCls extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isValid: true
    }
  }
  render() {
    return (
      this.state.isValid ? <div>
        <h1>Welcome Guest</h1></div> : <div>
          <h1>generic:conditional component</h1>
        </div>)

    //return this.state.isValid && <div><h1> Welcome Guest</h1 ></div>

  };



}

export default ConditionalOperationCls
