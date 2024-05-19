import { useEffect, useState } from 'react'
import Header from './components/Header'
import Experiences from './components/Experiences'
import Statistics from './components/Statistics'
import './App.css'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = 'give feedback'
  const all = good + neutral + bad;
  const average = all !== 0 ? (good - bad) / all : 0;
  const positivePercentage = all !== 0 || good !== 0? (good / all) * 100: 0;

  return (
    <>
      <Header title={title}/>
      <div className="container-buttons">
        <Experiences nameButton={'good'} counterFeedbackButton={good} setCounterFeedBackButton={setGood}/>
        <Experiences nameButton={'neutral'} counterFeedbackButton={neutral} setCounterFeedBackButton={setNeutral}/>
        <Experiences nameButton={'bad'} counterFeedbackButton={bad} setCounterFeedBackButton={setBad}/>
      </div>
      <Statistics  good={good} bad={bad} neutral={neutral} all={all} average={average} positive={`${positivePercentage.toFixed(2)}%`}/>
    </>
  )
}

export default App
