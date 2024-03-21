import { useQuery } from "@tanstack/react-query"
import { getLeaderboard } from "../apis/pokemon"
import Loading from "./Loading"

function Leaderboard() {
  const { isLoading, isError, data: Scores } = useQuery({
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
  if (Scores === undefined){
    return <div></div>
  }
  return (
    <>
      <div>
        <h1>Leaderboard</h1>
      </div>
      <table>
        <tr>
          <td>Rank</td>
          <td>Name</td>
          <td>HighScore</td>
          <td>Lives</td>
        </tr>

        {Scores.map((score) => (
          <tr key={score.id}>
            <td>{score.id}</td>
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
