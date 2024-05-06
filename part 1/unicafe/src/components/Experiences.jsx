import React from 'react'
const Experiences = ({ nameButton, setCounterFeedBackButton, counterFeedbackButton  }) => {

  const onClickFeedback= () => {
    setCounterFeedBackButton(counterFeedbackButton + 1)
  }

  return (
    <button onClick={onClickFeedback}>
      {`${nameButton} `}
    </button>

  )
}

export default Experiences
