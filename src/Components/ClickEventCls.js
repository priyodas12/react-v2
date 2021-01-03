import React, { Component } from 'react'

class ClickEventCls extends Component {

  clickHandler() {
    console.log("button clicked form Class component!")
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click here</button>
      </div>
    )
  }
}

export default ClickEventCls
