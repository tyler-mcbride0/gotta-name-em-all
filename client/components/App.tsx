import Header from './Header.tsx'
import Leaderboard from './Leaderboard.tsx'
import PokiGuess from './PokiGuess.tsx'

function App() {
  return (
    <div className="main-container">
      <Header />
      <PokiGuess />
      <Leaderboard />
    </div>
  )
}

export default App
