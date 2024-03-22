import { useQuery } from '@tanstack/react-query'
import { getLeaderboard } from '../apis/pokemon'
import Loading from './Loading'
import { Link } from 'react-router-dom'

function FullLeaderboard() {
  const {
    isLoading,
    isError,
    data: Scores,
  } = useQuery({
    queryKey: [],
    queryFn: async () => getLeaderboard(),
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
  return (
    <>
      <div>
        <h1>
          <Link to={'/'}>Home</Link>
        </h1>
        <h1>Leaderboard</h1>
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
                <img
                  src="../../public/images/01-Gold Medal.png"
                  alt="Gold medal"
                />
              ) : index === 1 ? (
                <img
                  src="../../public/images/02-Silver Medal.png"
                  alt="Silver medal"
                />
              ) : index === 2 ? (
                <img
                  src="../../public/images/03-Bronze Medal.png"
                  alt="Bronze medal"
                />
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

export default FullLeaderboard
