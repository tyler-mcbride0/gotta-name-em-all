import { useFruits } from '../hooks/useFruits.ts'
import Header from './Header.tsx'
import Leaderboard from './Leaderboard.tsx'
import PokiGuess from './PokiGuess.tsx'

function App() {
  return (
    <>
      <div>
        <Header />
        <PokiGuess />
        <Leaderboard />
      </div>
    </>
  )
}

export default App
