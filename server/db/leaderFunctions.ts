import connection from './connection.ts'
// import { Leaderboard } from '../../models/leader-interface.ts'
import { Leaders } from '../../models/leaderInterface.ts'

const db = connection

export async function getTopThree(): Promise<Leaders[]> {
  const leaders = db('leaderboard')
    .select('name', 'score', 'lives')
    .orderBy('score', 'desc')
    .orderBy('lives', 'desc')
    .limit(3)
  console.log('Succes', leaders)
  return leaders
}

export async function getAllScores() {
  const scores = await db('leaderboard')
  return scores
}

export async function insertScore(name: string, score: number, lives: number) {
  const result = await db('leaderboard').insert({ name, score, lives })
  console.log('Success', result)
  return result
}
