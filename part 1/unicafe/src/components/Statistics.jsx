import React from 'react'

const Statistics = ({ good, neutral, bad, all, average, positive}) => {
  return (
    <div>
      <h2>statistics</h2>
      <div>{`good ${good}`}</div>
      <div>{`neutral ${neutral}`}</div>
      <div>{`bad ${bad}`}</div>
      <div>{`all ${all}`}</div>
      <div>{`average ${average}`}</div>
      <div>{`positive ${positive}`}</div>
    </div>
  )
}

export default Statistics
