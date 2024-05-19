import { useState } from 'react'
import Header from './components/Header'
import Experiences from './components/Experiences'
import './App.css'

const Statistics = (props) => {
  return <div>{props.text} {props.value}</div>
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = 'give feedback'
  const all = good + neutral + bad;
  const average = all !== 0 ? (good - bad) / all : 0;
  const positivePercentage = all !== 0 || good !== 0 ? (good / all) * 100 : 0;

  return (
    <>
      <Header title={title} />
      <div className="container-buttons">
        <Experiences nameButton={'good'} counterFeedbackButton={good} setCounterFeedBackButton={setGood} />
        <Experiences nameButton={'neutral'} counterFeedbackButton={neutral} setCounterFeedBackButton={setNeutral} />
        <Experiences nameButton={'bad'} counterFeedbackButton={bad} setCounterFeedBackButton={setBad} />
      </div>
      <div>
        <h2><strong>statistics</strong></h2>
        <Statistics text={'good'} value={good} />
        <Statistics text={'neutral'} value={neutral} />
        <Statistics text={'bad'} value={bad} />
        <Statistics text={'all'} value={all} />
        <Statistics text={'average'} value={average} />
        <Statistics text={'positive'} value={`${positivePercentage.toFixed(2)}%`} />
      </div>


    </>
  )
}

export default App
