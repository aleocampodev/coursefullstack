import React from 'react'

const Total = (props) => {
    const totalExercises = props.parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <>
      <p>Number of exercises {totalExercises}</p>
    </>
  )
}

export default Total
