import { useQuery } from '@tanstack/react-query'
import { getBoard } from '../apis/pokemon'
import Loading from './Loading'
import { Link } from 'react-router-dom'

function Leaderboard() {
  const {
    isLoading,
    isError,
    data: Scores,
  } = useQuery({
    queryKey: [],
    queryFn: async () => getBoard(),
  })
  if (isLoading)
    return (
      <>
        <Loading />
      </>
    )
  if (isError) return <div>Error: Something went wrong!</div>
  if (Scores === undefined) {
    return <div></div>
  }

  // const rank = 1
  return (
    <>
      <div>
        <h1>
          <Link to={'/leaderboard'}>Leaderboard</Link>
        </h1>
      </div>
      <table>
        <tr>
          <td>Rank</td>
          <td>Name</td>
          <td>HighScore</td>
          <td>Lives</td>
        </tr>

        {Scores.map((score, index) => (
          <tr key={score.id}>
            <td>
              {index === 0 ? (
                <img src="/images/01-Gold Medal.png" alt="Gold medal" />
              ) : index === 1 ? (
                <img src="/images/02-Silver Medal.png" alt="Silver medal" />
              ) : index === 2 ? (
                <img src="/images/03-Bronze Medal.png" alt="Bronze medal" />
              ) : (
                <h3>&nbsp;&nbsp;&nbsp;{index + 1} </h3>
              )}
            </td>
            <td>{score.name}</td>
            <td>{score.score}</td>
            <td>{score.lives}</td>
          </tr>
        ))}
      </table>
    </>
  )
}

export default Leaderboard
