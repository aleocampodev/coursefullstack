import { useState } from 'react'
import Header from './components/Header'
import Experiences from './components/Experiences'
import './App.css'

const StatisticscLine = (props) => {
  return <div>{props.text} {props.value}</div>
}



const Button = (props) => {

  const onClickFeedback = () => {
    props.setCounterFeedBackButton(props.counterFeedbackButton + 1)
  }

  return (
    <button onClick={onClickFeedback}>
      {`${props.nameButton} `}
    </button>

  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>No given feedback</p>
  }

  return (
    <>
      <StatisticscLine text={'good'} value={props.good} />
      <StatisticscLine text={'neutral'} value={props.neutral} />
      <StatisticscLine text={'bad'} value={props.bad} />
      <StatisticscLine text={'all'} value={props.all} />
      <StatisticscLine text={'average'} value={props.average} />
      <StatisticscLine text={'positive'} value={`${props.positivePercentage.toFixed(2)}%`} />
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title = 'give feedback'
  const subTitle = 'statistics'
  const all = good + neutral + bad;
  const average = all !== 0 ? (good - bad) / all : 0;
  const positivePercentage = all !== 0 || good !== 0 ? (good / all) * 100 : 0;



  return (
    <>
      <Header title={title} />
      <div className="container-buttons">
        <Button nameButton={'good'} counterFeedbackButton={good} setCounterFeedBackButton={setGood} />
        <Button nameButton={'neutral'} counterFeedbackButton={neutral} setCounterFeedBackButton={setNeutral} />
        <Button nameButton={'bad'} counterFeedbackButton={bad} setCounterFeedBackButton={setBad} />
      </div>
      <div>
        <Header title={subTitle} />
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positivePercentage={positivePercentage}/>
      </div>
    </>
  )
}

export default App
