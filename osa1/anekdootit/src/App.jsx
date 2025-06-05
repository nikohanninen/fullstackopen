import { useState } from 'react'

const DisplayAnecdote = (props) => {
  return (
    <div>{props.anecdotes[props.randNum]}</div>
  )
}

const DisplayVotes = (props) => {
  return(
    <div>
      has {props.amount} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const votes = Array(anecdotes.length).fill(0)

  const [votesState, setVotesState] = useState(votes)

  const [selected, setSelected] = useState(0)

  const selectRandomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    console.log(randomNumber)
    
    setSelected(randomNumber)
  }

  const handleVote = () => {
    
    const copy = [...votesState]
    copy[selected] += 1

    setVotesState(copy)

  }

  const mostVoted = () => {
    return(
      votesState.indexOf(Math.max(...votesState))
    )
}

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <DisplayAnecdote anecdotes={anecdotes} randNum={selected} />
        <DisplayVotes amount={votesState[selected]}/>
        <button onClick={handleVote}>vote</button>
        <button onClick={selectRandomAnecdote}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <DisplayAnecdote anecdotes={anecdotes} randNum={mostVoted()}/>
        <DisplayVotes amount={votesState[mostVoted()]}/>
      </div>
    </div>
  )
}

export default App
