import React, { useState } from 'react'

const Index = () => {
  const [correctNumber, setCorrectNumber] = useState(Math.floor(Math.random() * 20) + 1)
  const [userGuess, setUserGuess] = useState('')
  const [result, setResult] = useState('')
  const [points, setPoints] = useState(100)

  const handleGuess = (e) => {
    e.preventDefault()
    if (userGuess == correctNumber) {
      setResult('Correct!')
      setPoints(points + 10)
      setCorrectNumber(Math.floor(Math.random() * 20) + 1)
    } else if (userGuess > correctNumber) {
      setResult('Too high')
      setPoints(points - 10)
    } else {
      setResult('Too low')
      setPoints(points - 10)
    }

    if (points === 0) {
      setResult('Game Over!')
    }
  }

  return (
    <div>
      <h1>Guess the number between 1 and 20</h1>
      <form onSubmit={handleGuess}>
        <input type="number" value={userGuess} onChange={(e) => setUserGuess(e.target.value)} />
        <button type="submit">Guess</button>
      </form>
      <p>{result}</p>
      <p>Points: {points}</p>
    </div>
  )
}

export default Index
