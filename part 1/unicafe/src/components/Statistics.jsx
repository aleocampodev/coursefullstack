import React from 'react'

const Statistics = ({ good, neutral, bad}) => {
  return (
    <div>
      <h2>statistics</h2>
      <div>{`good ${good}`}</div>
      <div>{`neutral ${neutral}`}</div>
      <div>{`bad ${bad}`}</div>
    </div>
  )
}

export default Statistics
