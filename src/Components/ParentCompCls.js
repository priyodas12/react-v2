import React, { Component } from 'react'
import Childcompcls from './ChildCompCls'

export default class Parentcompcls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Parent Component!'

    }

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.name} from ${childName}`)
  }

  render() {
    return (
      <>
        <Childcompcls greetHandler={this.greetParent} name='child component'></Childcompcls>
      </>
    )
  }
}
