import { useState } from 'react'
import './App.css'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

function App() {
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(new Array(anecdotes.length).fill(0))


  const handleClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random)
  }

  const handleVoteClick = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
  }

  return (
    <div className="container-anecdotes">
      {anecdotes[selected]}
      <p>{`has ${allVotes[selected]} votes `}</p>
      <button onClick={handleClick}>next anecdote</button>
      <button onClick={handleVoteClick}>vote</button>
    </div>
  )
}

export default App
