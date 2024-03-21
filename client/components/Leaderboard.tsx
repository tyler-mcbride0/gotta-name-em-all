function Leaderboard() {
  const Scores = [
    {
      id: 1,
      name: 'Tyler',
      score: 25,
      lives: 5,
    },
    {
      id: 2,
      name: 'Matthew',
      score: 25,
      lives: 3,
    },
    {
      id: 3,
      name: 'Jolon',
      score: 22,
      lives: 0,
    },
    {
      id: 4,
      name: 'Maitri',
      score: 15,
      lives: 0,
    },
    {
      id: 5,
      name: 'David',
      score: 5,
      lives: 0,
    },
  ]

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
