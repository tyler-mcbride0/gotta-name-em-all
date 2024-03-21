import { useState } from 'react'
import { getAllPokemon, getSpecificPokemon } from '../apis/pokemon'
import { useQuery } from '@tanstack/react-query'
import SpecificPokemon from './SpecificPokemon'

function PokiGuess() {
  const [score, setScore] = useState(0)
  const { isLoading, isError, data } = useQuery({
    queryKey: ['randomPokemon'],
    queryFn: async () => getAllPokemon(),
  })
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: Something went wrong!</div>

  // console.log(data)

  function chooseRandomPokemon(pokemonList: any, n) {
    const randomPokemon = []
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * pokemonList.results.length)
      randomPokemon.push(pokemonList.results[randomIndex].name)
    }
    return randomPokemon
  }

  const randomPokemon = chooseRandomPokemon(data, 4)
  console.log(randomPokemon)

  const handleAnswer = () => {}

  // 1 Correct (Name + Sprite), 3 Wrong(Name)

  // Renders Sprite, with a class that makes black (0% brightness), onAnswer - makes 100% brightness

  // Renders Four buttons, 1 for correct Name, 3 with incorrect Name. Random Positioning?
  const SpriteVariable =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png'
  const Answered = 'true'
  return (
    <div className="game-container">
      <div className="top-container">
        <div className="score-container">
          <div className="highscore-container">{score}</div>
          <div>lives</div>
        </div>

        <div className="prompt-container">
          <SpecificPokemon name={`${randomPokemon[0]}`} />
        </div>
      </div>

      <div className="bottom-container">
        <div className="trainer-container">
          <img
            className="trainer"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d036937d-a72f-43c1-b155-bafe45d2d742/ddtk694-d14642bf-9b73-430a-99c8-2c199bacc469.png/v1/fill/w_580,h_580/ash_ketchum_v2_back_sprite_by_robloxmaster376_ddtk694-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTgwIiwicGF0aCI6IlwvZlwvZDAzNjkzN2QtYTcyZi00M2MxLWIxNTUtYmFmZTQ1ZDJkNzQyXC9kZHRrNjk0LWQxNDY0MmJmLTliNzMtNDMwYS05OWM4LTJjMTk5YmFjYzQ2OS5wbmciLCJ3aWR0aCI6Ijw9NTgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3uCg4_3dUGDt9emVtJnxxIla67MO7qiJVxNWD37Kn6c"
          />
        </div>

        <div className="button-container">
          <div>
            <button onClick={handleAnswer}>{randomPokemon[0]}</button>
            <button>{randomPokemon[1]}</button>
          </div>

          <div>
            <button>{randomPokemon[2]}</button>
            <button>{randomPokemon[3]}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokiGuess
