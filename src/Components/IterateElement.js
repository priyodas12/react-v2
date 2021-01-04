import React from 'react'

export default function Iterateelement(props) {
  const numbers = [1, 2, 3, 4, 5, 6];
  const number = numbers.map(n => <h3>{n * 2}</h3>)

  return (
    <>
      {number}
    </>
  )
}


