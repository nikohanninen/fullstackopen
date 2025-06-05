import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <th style={{textAlign:'left'}}>{props.text}</th>
        <th style={{textAlign:'left'}}>{props.value} {props.unit}</th>
      </tr>
    </tbody>
  )
}

const Statistics = ( {good, neutral, bad, sum, average, positivePercentage }) => {

  if (sum != 0) {
    return (
    <div>
      <table>
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>  
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={sum}/>
        <StatisticLine text='average' value={average.toFixed(1)}/>
        <StatisticLine text='positive' value={positivePercentage.toFixed(1)} unit='%'/>
      </table>
    </div>
  )
  }

  else {
    return (
      <p> No feedback given </p>
    )
  }
  
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const sum = good + neutral + bad

  const average = () => {
    return (
      ((good * 1 + neutral * 0 + bad * -1)/ sum)
    )
  }

  const positivePercentage = () => {
    return (
      good / sum * 100
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text={'good'}/>
      <Button onClick={handleNeutral} text={'neutral'}/>
      <Button onClick={handleBad} text={'bad'} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} average={average()} positivePercentage={positivePercentage()}/>
    </div>
  )
}

export default App
