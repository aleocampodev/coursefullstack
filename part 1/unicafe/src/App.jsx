import { useState } from 'react'
import Header from './components/Header'
import Experiences from './components/Experiences'
import Statistics from './components/Statistics'
import './App.css'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = 'give feedback'
  return (
    <>
      <Header title={title}/>
      <div className="container-buttons">
        <Experiences nameButton={'good'} counterFeedbackButton={good} setCounterFeedBackButton={setGood}/>
        <Experiences nameButton={'neutral'}/>
        <Experiences nameButton={'bad'}/>
      </div>
      <Statistics  good={good} bad={bad} neutral={neutral}/>
    </>
  )
}

export default App
