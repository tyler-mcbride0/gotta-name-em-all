import connection from './connection.ts'
// import { Leaderboard } from '../../models/leader-interface.ts'
import { Leaders } from '../../models/leaderInterface.ts'

const db = connection

export async function getTopFive(): Promise<Leaders[]> {
  const leaders = await db('leaderboard')
    .select('name', 'score', 'lives')
    .orderBy('score', 'desc')
    .orderBy('lives', 'desc')
    .limit(5)
  return leaders
}

export async function getAllScores() {
  const scores = await db('leaderboard')
    .orderBy('score', 'desc')
    .orderBy('lives', 'desc')
  return scores
}

export async function insertScore(name: string, score: number, lives: number) {
  const result = await db('leaderboard').insert({ name, score, lives })
  return result
}
