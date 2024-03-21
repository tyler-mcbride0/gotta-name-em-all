import React, { useState } from 'react'
import { getAllPokemon, getSpecificPokemon } from '../apis/pokemon'
import { useQuery } from '@tanstack/react-query'
import SpecificPokemon from './SpecificPokemon'
import { SearchResult } from '../../models/pokemon'

function PokiGuess() {
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(5)
  const [pokemon, setPokemon] = useState([
    'pikachu',
    'charmander',
    'bulbasaur',
    'squirtle',
  ])
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
    console.log(pokemonList)
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
      setScore(score + 1)
    } else {
      setLives(lives - 1)
    }
    shuffleArray(placement)
    setPokemon(randomPokemon)
    checkEnd()
  }

  function checkEnd() {
    if (score === 9) {
      console.log('you won')
    } else if (lives === 1) {
      console.log('game over')
    }
  }

  shuffleArray(placement)
  // setPokemon(chooseRandomPokemon(data, 4))
  return (
    <div>
      <div className="highscore-container">Score: {score}</div>
      <div className="live-container">Lives: {lives}</div>
      <div className="prompt-container">
        {/* <SpecificPokemon name={randomPokemon[0]} /> */}
        <SpecificPokemon name={pokemon[0]} />
      </div>
      <img
        className="trainer"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d036937d-a72f-43c1-b155-bafe45d2d742/ddtk694-d14642bf-9b73-430a-99c8-2c199bacc469.png/v1/fill/w_580,h_580/ash_ketchum_v2_back_sprite_by_robloxmaster376_ddtk694-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTgwIiwicGF0aCI6IlwvZlwvZDAzNjkzN2QtYTcyZi00M2MxLWIxNTUtYmFmZTQ1ZDJkNzQyXC9kZHRrNjk0LWQxNDY0MmJmLTliNzMtNDMwYS05OWM4LTJjMTk5YmFjYzQ2OS5wbmciLCJ3aWR0aCI6Ijw9NTgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3uCg4_3dUGDt9emVtJnxxIla67MO7qiJVxNWD37Kn6c"
        alt="Player trainer"
      />
      <div className="button-container">
        <button onClick={() => handleClick(event, pokemon[placement[0]])}>
          {pokemon[placement[0]]}
        </button>
        <button onClick={() => handleClick(event, pokemon[placement[1]])}>
          {pokemon[placement[1]]}
        </button>
        <button onClick={() => handleClick(event, pokemon[placement[2]])}>
          {pokemon[placement[2]]}
        </button>
        <button onClick={() => handleClick(event, pokemon[placement[3]])}>
          {pokemon[placement[3]]}
        </button>
      </div>
    </div>
  )
}

export default PokiGuess
