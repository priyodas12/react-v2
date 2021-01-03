//Example of Destructuring in Functional component!
import React from 'react'

//const Welcome = (name,surname) =>{}

const WelcomeFunc = (props) => {
  const { name, surname } = props;
  return (
    <div>
      <h1>Functional Component!</h1>
      <h1>Hello "{name},{surname}"</h1>
    </div>
  )
}

export default WelcomeFunc
