import { useState } from 'react'
import { getAllPokemon, getSpecificPokemon } from '../apis/pokemon'
import { useQuery } from '@tanstack/react-query'

function PokiGuess() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['randomPokemon'],
    queryFn: async () => getAllPokemon(),
  })
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching data</div>

  function chooseRandomPokemon(pokemonList, n) {
    const randomPokemon = []
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * pokemonList.results.length)
      randomPokemon.push(pokemonList.results[randomIndex])
    }
    return randomPokemon
  }

  const randomPokemon = chooseRandomPokemon(data, 4)

  const { isLoading, isError, correct } = useQuery({
    queryKey: ['specificPokemon', randomPokemon[0].name],
    queryFn: async () => getSpecificPokemon(randomPokemon[0].url),
  })
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching data</div>

  // 1 Correct (Name + Sprite), 3 Wrong(Name)

  // Renders Sprite, with a class that makes black (0% brightness), onAnswer - makes 100% brightness

  // Renders Four buttons, 1 for correct Name, 3 with incorrect Name. Random Positioning?
  const SpriteVariable =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png'
  const Answered = 'true'
  return (
    <div className="gameContainer">
      <div className="promptContainer">
        <p>Game Here</p>
        <img src={`${SpriteVariable}`} className={Answered} alt="" />
      </div>
      <div className="buttonContainer">
        <button className="button1"></button>
        <button className="button2"></button>
        <button className="button3"></button>
        <button className="button4"></button>
      </div>
    </div>
  )
}

export default PokiGuess
