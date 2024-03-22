import React, { useState } from 'react'
import { getAllPokemon } from '../apis/pokemon'
import { useQuery } from '@tanstack/react-query'
import SpecificPokemon from './SpecificPokemon'
import { SearchResult } from '../../models/pokemon'

function PokiGuess() {
  const [playerScore, setPlayerScore] = useState(0)
  const [playerLives, setPlayerLives] = useState(5)
  const [pokemon, setPokemon] = useState([
    'pikachu',
    'charmander',
    'bulbasaur',
    'squirtle',
  ])
  const [gameState, setGameState] = useState(0)
  const [postHighScore, setpostHighScore] = useState({
    name: '',
    score: 0,
    lives: 5,
  })
  const [endMessage, setEndMessage] = useState('Error')

  const { isLoading, isError, data } = useQuery({
    queryKey: ['randomPokemon'],
    queryFn: async () => getAllPokemon(),
    staleTime: 180000,
  })
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: Something went wrong!</div>

  function chooseRandomPokemon(n: number, pokemonList?: SearchResult) {
    if (pokemonList == null) {
      throw new Error('No Data')
    }
    const randomPokemonSet = new Set<string>()
    while (randomPokemonSet.size != n) {
      const randomIndex = Math.floor(Math.random() * pokemonList.results.length)
      randomPokemonSet.add(pokemonList.results[randomIndex].name)
    }
    return Array.from(randomPokemonSet)
  }

  const placement = [0, 1, 2, 3]
  function shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  const handleClick = (event, guessedPokemon: string) => {
    event.preventDefault()
    const randomPokemon = chooseRandomPokemon(4, data)
    if (guessedPokemon === pokemon[0]) {
      setPlayerScore(playerScore + 1)
    } else {
      setPlayerLives(playerLives - 1)
    }
    shuffleArray(placement)
    setPokemon(randomPokemon)
    checkEnd()
  }

  function checkEnd() {
    if (playerScore === 9) {
      setEndMessage("You've beaten the game! Great Job")
      setGameState(1)
      console.log('you won')
    } else if (playerLives === 1) {
      setEndMessage("Uh Oh! You've run out of Lives")
      setGameState(1)
      console.log('game over')
    }
  }
  shuffleArray(placement)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    setpostHighScore((prev) => ({
      ...prev,
      [name]: value,
      score: playerScore,
      lives: playerLives,
    }))
  }

  async function handleSubmit() {
    // event?.preventDefault()

    console.log(postHighScore)
    const response = await fetch('/api/v1/leaders/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postHighScore),
    })

    if (!response.ok) {
      throw new Error('Failed to submit highscore')
    }

    setpostHighScore({ name: '', score: 0, lives: 5 })
    setPlayerScore(0)
    setPlayerLives(5)
    setGameState(0)
  }

  // gameStates =  Playing (0), gameEnded(1)

  // if statement based on gamestate
  if (gameState === 1) {
    return (
      <div className="end-container">
        <div className="end-screen">
          <h2>{endMessage}</h2>
          <p>Final Score: {playerScore}</p>
          <div>
            <input
              onChascreennge={handleChange}
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              value={postHighScore.name}
            ></input>
            <button onClick={handleSubmit}>Submit Score</button>
          </div>
        </div>
      </div>
    )
  } else if (gameState === 0) {
    return (
      <div className="game-container">
        <div className="top-container">
          <div className="score-container">
            <div className="highscore-container">Score: {playerScore}</div>
            <div className="live-container">Lives: {playerLives}</div>
          </div>

          <div className="prompt-container">
            <SpecificPokemon name={pokemon[0]} />
          </div>
        </div>

        <div className="bottom-container">
          <div className="trainer-container">
            <img
              className="trainer"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d036937d-a72f-43c1-b155-bafe45d2d742/ddtk694-d14642bf-9b73-430a-99c8-2c199bacc469.png/v1/fill/w_580,h_580/ash_ketchum_v2_back_sprite_by_robloxmaster376_ddtk694-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTgwIiwicGF0aCI6IlwvZlwvZDAzNjkzN2QtYTcyZi00M2MxLWIxNTUtYmFmZTQ1ZDJkNzQyXC9kZHRrNjk0LWQxNDY0MmJmLTliNzMtNDMwYS05OWM4LTJjMTk5YmFjYzQ2OS5wbmciLCJ3aWR0aCI6Ijw9NTgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3uCg4_3dUGDt9emVtJnxxIla67MO7qiJVxNWD37Kn6c"
              alt="Player trainer"
            />
          </div>

          <div className="button-container">
            <div>
              <button
                className="button1"
                onClick={() => handleClick(event, pokemon[placement[0]])}
              >
                {pokemon[placement[0]]}
              </button>
              <button
                className="button2"
                onClick={() => handleClick(event, pokemon[placement[1]])}
              >
                {pokemon[placement[1]]}
              </button>
            </div>
            <div>
              <button
                className="button3"
                onClick={() => handleClick(event, pokemon[placement[2]])}
              >
                {pokemon[placement[2]]}
              </button>
              <button
                className="button4"
                onClick={() => handleClick(event, pokemon[placement[3]])}
              >
                {pokemon[placement[3]]}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    console.log(gameState)
    return (
      <div>
        <h2>
          There was an issue loading the game. Please contact a facilitator.
        </h2>
      </div>
    )
  }
}

export default PokiGuess
