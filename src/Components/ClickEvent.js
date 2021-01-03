import React from 'react'

const ClickEvent = () => {

  const clickHandler = () => {
    console.log('button cliecked!')
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default ClickEvent
