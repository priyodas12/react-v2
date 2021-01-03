import React from 'react'

const ClickEventFunc = () => {

  const clickHandler = () => {
    console.log('button clicked from functional component!')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default ClickEventFunc
