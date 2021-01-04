import React from 'react'

export default function Childcompcls(props) {


  return (
    <>
      <button onClick={() => props.greetHandler(props.name)} >greet parent</button>
    </>
  )
}
