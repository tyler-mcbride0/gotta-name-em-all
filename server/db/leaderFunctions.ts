import connection from './connection.ts'
// import { Leaderboard } from '../../models/leader-interface.ts'
import { Leaders } from '../../models/leaderInterface.ts'

const db = connection

export async function getTopThree(): Promise<Leaders[]> {
  const leaders = db('leaderboard')
    .select('name', 'score')
    .orderBy('score', 'desc')
    .limit(3)
  console.log('Succes', leaders)
  return leaders
}

export async function insertScore(name: string, score: number) {
  const result = await db('leaderboard').insert({ name, score })
  console.log('Success', result)
  return result
}
