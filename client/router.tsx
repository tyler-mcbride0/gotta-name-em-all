/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import FullLeaderboard from './components/FullLeaderboard'

const router = createBrowserRouter(
  createRoutesFromElements([
    <>
      <Route path="/" element={<App />} />
      <Route path="/leaderboard" element={<FullLeaderboard />} />
    </>,
  ]),
)

export default router
